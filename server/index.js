const express = require('express');
const path = require('path');
const fs = require('fs');
const http = require('http');

// Get paths from npm packages
const { scramjetPath } = require('@mercuryworkshop/scramjet/path');
const { baremuxPath } = require('@mercuryworkshop/bare-mux/node');
const { server: wisp, logging } = require('@mercuryworkshop/wisp-js/server');

// Wisp config
logging.set_level(logging.NONE);
Object.assign(wisp.options, {
  allow_udp_streams: false,
  hostname_blacklist: [/example\.com/],
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  const ts = new Date().toISOString().slice(11, 19);
  console.log(`[${ts}] ${req.method} ${req.url}`);
  next();
});

// Static files — serve npm packages
app.use(express.static(path.join(__dirname, '../public')));
app.use('/scram', express.static(scramjetPath));
app.use('/baremux', express.static(baremuxPath));

// Helper
function readDataFile(filename) {
  const filePath = path.join(__dirname, '../data', filename);
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error(`[ERROR] Reading ${filename}:`, err.message);
    return [];
  }
}

// API
app.get('/api/games', (req, res) => res.json({ success: true, data: readDataFile('games.json') }));
app.get('/api/apps',  (req, res) => res.json({ success: true, data: readDataFile('apps.json') }));
app.get('/api/tools', (req, res) => res.json({ success: true, data: readDataFile('tools.json') }));

// Catch-all
app.get('*', (req, res) => {
  if (path.extname(req.path) && req.path !== '/') {
    res.status(404).sendFile(path.join(__dirname, '../public/404.html'));
  } else {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  }
});

app.use((err, req, res, next) => {
  console.error('[ERROR]', err.stack);
  res.status(500).json({ success: false, error: 'Internal server error' });
});

// HTTP server with Wisp WebSocket support
const server = http.createServer((req, res) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  app(req, res);
});

server.on('upgrade', (req, socket, head) => {
  if (req.url.endsWith('/wisp/')) {
    wisp.routeRequest(req, socket, head);
  } else {
    socket.end();
  }
});

server.listen(PORT, () => {
  console.log('\x1b[31m');
  console.log('  ██████╗██████╗ ██╗███╗   ███╗███████╗ ██████╗ ███╗   ██╗');
  console.log('  ██╔═══╝██╔══██╗██║████╗ ████║██╔════╝██╔═══██╗████╗  ██║');
  console.log('  ██║    ██████╔╝██║██╔████╔██║███████╗██║   ██║██╔██╗ ██║');
  console.log('  ██║    ██╔══██╗██║██║╚██╔╝██║╚════██║██║   ██║██║╚═╝  ██║');
  console.log('  ██████╗██║  ██║██║██║ ╚═╝ ██║███████║╚██████╔╝██║ ╚████║');
  console.log('  ╚═════╝╚═╝  ╚═╝╚═╝╚═╝     ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═══╝');
  console.log('\x1b[0m');
  console.log(`  \x1b[31m🔴 ZONE\x1b[0m  →  http://localhost:${PORT}`);
  console.log(`  Wisp: /wisp/ ✓`);
  console.log(`  Scramjet: /scram/ ✓\n`);
});

module.exports = { app, server };