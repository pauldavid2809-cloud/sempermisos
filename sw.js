// sw.js - Service Worker para recibir notificaciones en segundo plano

self.addEventListener('push', function(event) {
  console.log('[Service Worker] Notificación Push recibida.');

  let data = {
    title: 'Seminario Mayor',
    body: 'Tu solicitud ha sido actualizada.',
    url: '/'
  };

  if (event.data) {
    try {
      data = event.data.json();
    } catch (e) {
      data.body = event.data.text();
    }
  }

  const options = {
    body: data.body,
    icon: 'Logo Seminario Borde (1).png', // Icono principal
    badge: 'Logo Seminario Borde (1).png', // Icono pequeño en barra de tareas
    vibrate: [200, 100, 200],
    data: {
      url: data.url || '/'
    },
    actions: [
      { action: 'open', title: 'Ver Solicitud' }
    ]
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notificación clickeada.');
  event.notification.close();

  let targetUrl = event.notification.data.url;

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
      // Si la app ya está abierta, enfocarla
      for (let i = 0; i < clientList.length; i++) {
        let client = clientList[i];
        if (client.url === targetUrl && 'focus' in client) {
          return client.focus();
        }
      }
      // Si no, abrir una nueva ventana
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});
