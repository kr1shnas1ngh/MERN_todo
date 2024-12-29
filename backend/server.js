const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
app.use(express.json());
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/todo';
port = process.env.PORT || 4000;

mongoose.connect('mongodb://127.0.0.1:27017/todoApp')
.then(() => {
    console.log("MongoDB connected successfully!");
    // Start the server after successful connection
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
})
.catch((err) => {
    console.log(`Error: ${err}`);
});