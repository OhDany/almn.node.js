const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => {
  console.log('In other middleware');
  res.send('<h1>The "Add Product" Page</>');

  app.use('/', (req, res, next) => {
    console.log('In other middleware');
    res.send('<h1>Hello from express!!!</>');
  });
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});
