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
    res.header("Content-Disposition", 'attachment;\  filename="Video.mp4');
    ytdl(url, {format: 'best'}).pipe(res);
    console.log(url)
  console.log("Downloaded above video")
})

app.get('/downloadaudio', (req, res) => {
    var url = req.query.url;
    res.header("Content-Disposition", 'attachment;\  filename="Audio.mp3');
    ytdl(url, {format: 'bestaudio'}).pipe(res);
    console.log(url)
  console.log("Downloaded above audio")
})