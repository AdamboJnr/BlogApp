const express = require('express');
const app = express();

app.use(express.json());



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App listening to port: ${PORT}`);
})