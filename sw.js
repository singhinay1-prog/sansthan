/* सिर्फ़ इंस्टॉल के लिए — कुछ भी सेव (cache) नहीं करता, इसलिए ऐप हमेशा नया ही खुलेगा */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
