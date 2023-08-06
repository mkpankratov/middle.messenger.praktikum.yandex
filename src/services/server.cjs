const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('./dist/'));

app.get('/', function (req, res) {
  res.redirect('/src/pages/');
});

app.listen(PORT, function () {
  console.log(` `);
  console.log(`Запустили Express на  http://localhost:${PORT}/src/pages/`);
  console.log(` `);
});
