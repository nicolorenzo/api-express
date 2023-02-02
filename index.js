const express = require('express');

const app = express();

app.listen('3000');
app.use(express.json());

//Body Params
app.route('/').post((req, res) => {
  const { nome, cidade } = req.body;
  res.send(`Meu nome é ${nome} e moro em ${cidade}`);
});

// Route Params
app.route('/:var').get((req, res) => {
  res.send(req.params.var);
});

// Query Params
app.route('/').get((req, res) => {
  res.send(req.query);
});
