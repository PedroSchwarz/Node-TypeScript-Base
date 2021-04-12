// Imports
import express from 'express';
// Get project port
const PORT = 5000 || process.env.PORT;
// Init express app
const app = express();
// Set express to use json
app.use(express.json());
// Routes
app.get('/', (req, res) => res.json({ message: 'Working' }));
// Start server
app.listen(PORT);
