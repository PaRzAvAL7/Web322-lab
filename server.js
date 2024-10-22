const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    const currentTimeGMT = new Date().toISOString();
    res.send(`<h1>Albin Paulson - WEB322 - ${currentTimeGMT}</h1>`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
