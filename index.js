const express = require('express');
const userRoute = require('./routes/user');
const cors = require('cors');
require('./db/connect')
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use(cors({
    origin: 'https://lakshsite.netlify.app/', // Replace with your React app's URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));
app.use('/api', userRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
