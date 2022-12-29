const express = require('express');
const app = express();
const blog = require('./routes/blog');
const connectDB = require('./db/connect');
const  mongoose  = require('mongoose');
const errorHandlerMiddleware = require('./middleware/error-handler');
require('dotenv').config();

app.use(express.json());

// Routes
app.use('/', blog);

// Middleware
app.use(errorHandlerMiddleware);


const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
            useFindAndModify: true
        });

        const conn = mongoose.connection;

        conn.once('error', console.error.bind('error', 'Failed to connect to MongoDb'));

        conn.on('open', () => {
            console.log('Succesfully connected to MongoDb');
        })

        app.listen(PORT, () =>  console.log(`App listening to port: ${PORT}`) )

    } catch (error) {
        console.log(error)
    }

}

start();

