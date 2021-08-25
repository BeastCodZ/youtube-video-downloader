const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
const ffmpeg = require('fluent-ffmpeg');

app.use('/static', express.static('./static'));

app.listen(process.env.PORT, () => {
    console.log("It Works!");
});

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: './' });
})

app.get('/download', (req, res) => {
    var url = req.query.url;
    res.sendFile('success.html', { root: './' });
    res.header("Content-Disposition", 'attachment;\  filename="Video.mp4');    
    ytdl(url, {format: 'mp4'}).pipe(res);
  
});

app.get('/downloadmp3', (req, res) => {   
  var url = req.query.url;
    res.header("Content-Disposition", 'attachment;\  filename="song.mp3');
    ytdl(url, {quality: 'highestaudio'}).pipe(res);
});