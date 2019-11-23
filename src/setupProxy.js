const proxy = require('http-proxy-middleware');

const proxyTarget  = {
  target: 'http://127.0.0.1:8080',
  // changeOrigin: true,
}
module.exports = function(app) {
  app.use('/api', proxy(proxyTarget));
};
