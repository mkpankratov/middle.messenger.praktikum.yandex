const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('./dist/'));

app.use('/', function (req, res) {
  res.sendFile(path.join(__dirname + '../../../dist/index.html'));
});

app.listen(PORT, function () {
  console.log(` `);
  console.log(`Запустили Express на  http://localhost:${PORT}`);
  console.log(` `);
});
