// Imports
import express from "express";
// Get project port
const PORT = 5000 || process.env.PORT;
const app = express();
app.use(express.json());
// Routes
app.get("/", (req, res) => res.json({ message: "Working" }));
// Start server
app.listen(PORT);
