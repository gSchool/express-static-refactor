const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT);
console.log('listenting on..', PORT);
