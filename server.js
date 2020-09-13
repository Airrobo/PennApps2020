const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile('/Users/andrew/Documents/GazeCloud/index.html');
});

app.listen(3000, () => console.log(' listening on port 3000!'));
