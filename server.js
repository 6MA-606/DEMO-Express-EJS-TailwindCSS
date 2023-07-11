var express = require('express');
var path = require('path');
var app = express();
require('dotenv').config();

var port = process.env.PORT || 3000;

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render(path.join(__dirname, 'pages/index.ejs'), { title: 'Hello World!' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
