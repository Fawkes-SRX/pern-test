const express = require('express');
const cors = require('cors');
const pool = require('./db'); // imports the db connection file

const app = express();
const PORT = process.env.PORT || 5000; // this would be either the port provided by cloud service, or 5000 locally

// Middleware
app.use(cors());
app.use(express.json());


// A simple route to check if we are alive
app.get('/', (req, res) => {
    res.json({ message: "Hello from the Backend!" });
});

app.get('/time', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Database query failed' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});