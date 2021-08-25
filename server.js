const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
app.use('/src/pages/index.hbs', express.static('/src/pages/index.hbs'));


app.get('', (req, res) => { 
    res.sendFile('index.html', { root: './' });
});

app.listen(3000, () => { 
    console.log('It Works!');
});