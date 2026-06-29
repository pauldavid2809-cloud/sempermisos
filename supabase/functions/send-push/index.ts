import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import webpush from "npm:web-push@3.6.0"

serve(async (req) => {
  // Configurar cabeceras CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: { 'Access-Control-Allow-Origin': '*' } })
  }

  try {
    const payload = await req.json()
    const record = payload.record // Obtiene el registro modificado de la base de datos

    // Solo notificar si la solicitud ha cambiado a aprobada o rechazada y no está pendiente
    if (!record || record.status === 'pendiente') {
      return new Response("No requiere accion.")
    }

    // Inicializar cliente Supabase con el Service Role Key
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    )

    // Obtener suscripciones activas de este seminarista
    const { data: subs, error: errSubs } = await supabase
      .from('push_subscriptions')
      .select('subscription')
      .eq('student_id', record.student_id)

    if (errSubs) {
      console.error("Error obteniendo suscripciones:", errSubs)
      return new Response(JSON.stringify({ error: errSubs.message }), { status: 500 })
    }

    if (!subs || subs.length === 0) {
      return new Response("El usuario no tiene dispositivos suscritos.")
    }

    // Configurar detalles VAPID
    webpush.setVapidDetails(
      'mailto:rectoria@seminariomayor.org',
      'BF6588iC-gXhD5J1xZ4Z3gI8-W7zH1oY2vT3uN-lP7cK6eJ5iM-q4t6vR8sY1', // Llave Pública Frontend
      'N3d8o_zX8yP6m5n9L4J3K2j1h0g9f8e7d6c5b4a3_2I'                    // Llave Privada
    )

    const message = JSON.stringify({
      title: record.status === 'aprobado' ? '✅ Solicitud Aprobada' : '❌ Solicitud Denegada',
      body: `Tu solicitud de ${record.type} ha sido resuelta por la Rectoría.`
    })

    // Enviar a todos los dispositivos suscritos del seminarista
    for (const s of subs) {
      try {
        // En Deno web-push espera la firma del formato de la suscripción
        await webpush.sendNotification(s.subscription, message)
      } catch (err) {
        console.error("Error enviando push individual:", err)
        // Si el navegador reporta que la suscripción expiró o es inválida, la limpiamos de la BD
        if (err.statusCode === 410 || err.statusCode === 404) {
          await supabase
            .from('push_subscriptions')
            .delete()
            .eq('subscription', s.subscription)
        }
      }
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" }
    })
  } catch (globalError) {
    console.error("Error global en la funcion:", globalError)
    return new Response(JSON.stringify({ error: globalError.message }), { status: 500 })
  }
})
