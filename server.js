const express = require('express');
const path = require('path');
const axios = require('axios'); // Import axios

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/result', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'result.html'));
});

// API endpoint to fetch random users
app.get('/api/users', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const users = response.data;

        // Shuffle and return random users
        const shuffled = users.sort(() => 0.5 - Math.random());
        res.json(shuffled.slice(0, 6)); // Return 6 random users
    } catch (error) {
        console.error('Error fetching users:', error.message);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
