import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
async function createServer() {
    const app = express();
    // Create Vite server in middleware mode
    const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'custom'
    });
    // Use vite's connect instance as middleware
    app.use(vite.middlewares);
    // API endpoints
    const proxyRequest = async (req, res, endpoint) => {
        try {
            const response = await fetch(`http://localhost:8080${endpoint}`);
            if (!response.ok) throw new Error(`Failed to fetch from ${endpoint}`);
            const data = await response.json();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: `Failed to fetch from ${endpoint}` });
        }
    };

    // Products endpoints
    app.get('/api/products', async (req, res) => proxyRequest(req, res, '/api/products'));
    app.get('/api/products/:id', async (req, res) => proxyRequest(req, res, `/api/products/${req.params.id}`));
    
    // Menu items endpoint
    app.get('/api/menu-items', async (req, res) => proxyRequest(req, res, '/api/menu-items'));
    
    // Orders endpoints
    app.post('/api/orders', async (req, res) => {
        try {
            const response = await fetch('http://localhost:8080/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(req.body)
            });
            if (!response.ok) throw new Error('Failed to create order');
            const data = await response.json();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create order' });
        }
    });
    
    // Payment endpoint
    app.post('/api/payments', async (req, res) => {
        try {
            const response = await fetch('http://localhost:8080/api/payments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(req.body)
            });
            if (!response.ok) throw new Error('Failed to process payment');
            const data = await response.json();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: 'Failed to process payment' });
        }
    });

    app.use('*', async (req, res) => {
        const url = req.originalUrl;
        try {
            // Read index.html
            let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
            // Apply Vite HTML transforms
            template = await vite.transformIndexHtml(url, template);
            // Send transformed HTML
            res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
        }
        catch (e) {
            const error = e;
            vite.ssrFixStacktrace(error);
            console.error(error);
            res.status(500).end(error.message);
        }
    });
    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
    });
}
createServer();
