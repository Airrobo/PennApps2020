const express = require('express');
const app = express();

//setting middleware
app.use(express.static('static'));

app.get('/', (req, res) => {
    res.sendFile('/Users/andrew/Documents/GazeCloud/public/index.html');
});

app.listen(3000, () => console.log(' listening on port 3000!'));
