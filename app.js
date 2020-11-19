const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('In the middleware');
  next();
});

app.use((req, res, next) => {
  console.log('In other middleware');
  res.send('<h1>Hello from express!!!</>');
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});
