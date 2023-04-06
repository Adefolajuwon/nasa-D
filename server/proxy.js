const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(
	'/auth',
	createProxyMiddleware({
		target: 'https://accounts.google.com',
		changeOrigin: true,
		secure: false,
	})
);

app.listen(8001, () => console.log('Proxy listening on port 8000'));
