const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000; // this would be either the port provided by cloud service, or 5000 locally

// Middleware
app.use(cors());
app.use(express.json());


// A simple route to check if we are alive
app.get('/', (req, res) => {
    res.json({ message: "Hello from the Backend!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});