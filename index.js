const express = require('express');
const userRoute = require('./routes/user');
const cors = require('cors');
const path = require('path'); // Import the 'path' module
require('./db/connect');
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use(cors({
    origin: 'https://lakshsite.netlify.app', // Replace with your React app's URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

app.use('/api', userRoute);
app.get('/', (req, res) => {
  res.send("running.......");
})

// Serve static assets (like CSS and JS files) from the 'build' folder
app.use(express.static(path.join(__dirname, 'build')));

// Serve static assets (like CSS and JS files) from the 'build' folder
app.use(express.static(path.join(__dirname, 'dist')));

// Handle all other routes by serving the main HTML file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
