// Get project port
const PORT = 5000 || process.env.PORT;
// Imports
import express from 'express';
const app = express();
app.use(express.json());
// Routes
app.get('/', (req, res) => {
    return res.json({message: 'Working'});
});
// Start server
app.listen(PORT);