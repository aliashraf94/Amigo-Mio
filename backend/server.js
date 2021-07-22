const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Welcome to the final project :-)')
});

app.listen(4000, () => console.log("Server is up and running"))