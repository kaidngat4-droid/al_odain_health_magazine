const CACHE_NAME = 'afaaq-health-v1.0.2';
const OFFLINE_URL = '/offline.html';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/about.html',
  '/archive.html',
  '/contact.html',
  '/subscribe.html',
  '/for-authors.html',
  '/for-reviewers.html',
  '/editorial-board.html',
  '/current-issue.html',
  '/share.html',
  '/offline.html',
  '/manifest.json',
  '/assets/css/main.css',
  '/assets/css/responsive.css',
  '/assets/js/app.js',
  '/assets/js/utils.js',
  '/assets/js/vpn.js',
  '/assets/js/splash.js',
  '/assets/images/logo.png',
  '/assets/images/icons/icon-72x72.png',
  '/assets/images/icons/icon-96x96.png',
  '/assets/images/icons/icon-128x128.png',
  '/assets/images/icons/icon-144x144.png',
  '/assets/images/icons/icon-152x152.png',
  '/assets/images/icons/icon-192x192.png',
  '/assets/images/icons/icon-384x384.png',
  '/assets/images/icons/icon-512x512.png'
];

// Install
self.addEventListener('install', (event) => {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .catch((err) => console.error('[SW] Cache failed:', err))
  );
  self.skipWaiting();
});

// Activate
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then((keys) => 
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch with Stale While Revalidate
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  
  // تجاهل التحليلات والإضافات
  if (event.request.url.includes('google-analytics') || 
      event.request.url.startsWith('chrome-extension://')) return;

  // معالجة الصور
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        
        return fetch(event.request).then((response) => {
          if (response?.ok) {
            caches.open(CACHE_NAME).then((c) => c.put(event.request, response.clone()));
          }
          return response;
        }).catch(() => {
          // صورة بديلة للأخطاء
          return new Response(
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0d9488"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>',
            { headers: { 'Content-Type': 'image/svg+xml' } }
          );
        });
      })
    );
    return;
  }

  // معالجة HTML أثناء عدم الاتصال
  if (event.request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        const networkFetch = fetch(event.request).then((response) => {
          if (response?.ok) {
            caches.open(CACHE_NAME).then((c) => c.put(event.request, response.clone()));
          }
          return response;
        }).catch(() => cached || caches.match(OFFLINE_URL));

        return cached || networkFetch;
      })
    );
    return;
  }

  // الافتراضي: Stale While Revalidate
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const networkFetch = fetch(event.request).then((response) => {
        if (response?.ok) {
          caches.open(CACHE_NAME).then((c) => c.put(event.request, response.clone()));
        }
        return response;
      }).catch(() => cached);

      return cached || networkFetch;
    })
  );
});

// Push Notifications
self.addEventListener('push', (event) => {
  const data = event.data?.json() || {};
  event.waitUntil(
    self.registration.showNotification(data.title || 'آفاق الصحية', {
      body: data.body || 'محتوى جديد',
      icon: '/assets/images/icons/icon-192x192.png',
      badge: '/assets/images/icons/icon-96x96.png',
      vibrate: [200, 100, 200],
      dir: 'rtl',
      lang: 'ar',
      data: { url: data.url || '/' },
      actions: [{ action: 'open', title: '📖 قراءة' }, { action: 'close', title: '❌ إغلاق' }]
    })
  );
});

// Notification Click
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  if (event.action === 'close') return;
  
  const url = event.notification.data?.url || '/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          client.focus();
          return client.navigate(url);
        }
      }
      return clients.openWindow(url);
    })
  );
});

console.log('✅ Service Worker loaded for آفاق الصحية');
