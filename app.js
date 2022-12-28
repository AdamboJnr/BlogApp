const express = require('express');
const app = express();
const blog = require('./routes/blog');

app.use(express.json());

// Routes
app.use('/', blog);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App listening to port: ${PORT}`);
})