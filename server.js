const express = require('express');
const app = express();

//setting middleware
app.use(express.static('static'));

app.get('/', (req, res) => {
    res.sendFile('public/index.html', {root:__dirname});
});

app.listen(3000, () => console.log(' listening on port 3000!'));
