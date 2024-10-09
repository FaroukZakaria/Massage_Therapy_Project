const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://user1:abc123321@firstserver.z0ezt.mongodb.net/massage?retryWrites=true&w=majority&appName=FirstServer")
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...'));


app.get('/', (req, res) => {
    res.send('Hello World');
});



app.listen(port, () => console.log(`listening to http://localhost:${port}`));