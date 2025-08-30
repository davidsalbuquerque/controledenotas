// Define um nome e versão para o cache
const CACHE_NAME = 'controle-notas-cache-v1';
// Lista de arquivos que serão armazenados em cache para funcionamento offline
const urlsToCache = [
  '/',
  'index.html'
];

// Evento de 'install': é disparado quando o Service Worker é instalado
self.addEventListener('install', event => {
  // Espera até que a promise dentro de waitUntil seja resolvida
  event.waitUntil(
    // Abre o cache com o nome definido
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aberto');
        // Adiciona todos os arquivos da lista ao cache
        return cache.addAll(urlsToCache);
      })
  );
});

// Evento de 'fetch': é disparado para cada requisição que a página faz
self.addEventListener('fetch', event => {
  event.respondWith(
    // Tenta encontrar a requisição no cache
    caches.match(event.request)
      .then(response => {
        // Se a requisição for encontrada no cache, retorna a resposta do cache
        if (response) {
          return response;
        }
        // Se não for encontrada, faz a requisição à rede
        return fetch(event.request);
      }
    )
  );
});
