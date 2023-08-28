const mongoose = require('mongoose')
const dotenv = require('dotenv').config();

const DB = process.env.DB_LINK;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB Atlas');
    })
    .catch(error => {
        console.error('Error connecting to MongoDB Atlas:', error);
    });