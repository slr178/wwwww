// server.js
import express from 'express';
import multer  from 'multer';
import fs      from 'fs';
import path    from 'path';
import OpenAI from 'openai';
import fetch from 'node-fetch';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware setup - order matters!
app.use(cors());  // Enable CORS for all routes
app.use(express.json());

// Add request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

const upload = multer({ storage: multer.memoryStorage() });

// configure OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// API Routes (before static files)
// Style preset endpoint
app.post('/api/style-preset', async (req, res) => {
  console.log('Style preset request:', req.body);
  const { description } = req.body;
  
  // For now, return some default parameters based on the description
  // In a real implementation, you might use AI to determine these values
  const params = {
    threshold: description.includes('fine') ? 140 : 128,
    blur: description.includes('soft') ? 2 : 1,
    scale: 1,
    strokeWidth: description.includes('bold') ? 2 : 1
  };
  
  console.log('Returning style params:', params);
  res.json(params);
});

// Image proxy endpoint
app.get('/api/sketch_proxy', async (req, res) => {
  console.log('Proxy request received:', req.query);
  const { url } = req.query;
  if (!url) return res.status(400).send('missing url');

  try {
    console.log('Fetching from URL:', url);
    const blobRes = await fetch(url);
    if (!blobRes.ok) {
      console.error('Blob fetch failed:', blobRes.status);
      return res.sendStatus(blobRes.status);
    }

    // get content type so we can forward it
    const contentType = blobRes.headers.get('content-type') || 'image/png';
    const buffer      = await blobRes.arrayBuffer();
    console.log('Successfully fetched image:', contentType, buffer.byteLength, 'bytes');

    res.set('Content-Type', contentType);
    // now the browser sees CORS from your own server, not Azure
    return res.send(Buffer.from(buffer));
  } catch (err) {
    console.error('Proxy error:', err);
    return res.status(500).send('proxy failed');
  }
});

// 1) From text prompt → sketch
app.post('/api/sketch-from-prompt', async (req, res) => {
  console.log('Prompt request received:', req.body);
  const { prompt } = req.body;
  try {
    const resp = await openai.images.generate({
      prompt: `${prompt}, black and white pencil sketch`,
      n: 1,
      size: "512x512"
    });
    console.log('OpenAI response:', resp.data[0].url);
    res.json({ url: resp.data[0].url });
  } catch (e) {
    console.error('OpenAI error:', e);
    res.status(500).json({ error: e.message });
  }
});

// 2) From uploaded image → variation/sketch
app.post('/api/sketch-from-image', upload.single('image'), async (req, res) => {
  console.log('Image variation request received');
  const tmpPath = path.join(process.cwd(), 'tmp.png');
  fs.writeFileSync(tmpPath, req.file.buffer);
  try {
    const resp = await openai.images.createVariation({
      image: fs.createReadStream(tmpPath),
      n: 1,
      size: "512x512"
    });
    fs.unlinkSync(tmpPath);
    console.log('OpenAI variation response:', resp.data[0].url);
    res.json({ url: resp.data[0].url });
  } catch (e) {
    console.error('OpenAI variation error:', e);
    res.status(500).json({ error: e.message });
  }
});

// Serve static files from the root directory (after API routes)
app.use(express.static('.', {
  setHeaders: (res, path) => {
    // Set proper MIME types for specific file extensions
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    } else if (path.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    } else if (path.endsWith('.html')) {
      res.setHeader('Content-Type', 'text/html');
    }
  }
}));

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
  console.log("API endpoints available:");
  console.log("  POST /api/style-preset");
  console.log("  POST /api/sketch-from-prompt");
  console.log("  POST /api/sketch-from-image");
  console.log("  GET  /api/sketch_proxy");
}); 