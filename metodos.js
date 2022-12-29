const express = require('express');

const app = express();

app.listen('3000');

// GET
app.route('/').get((req, res) => res.send('Home'));
app.route('/sobre').get((req, res) => res.send('Sobre'));

// POST
app.use(express.json());
app.route('/').post((req, res) => res.send(req.body));

// PUT
let author = 'Nico';
app.route('/').get((req, res) => res.send(author));
app.use(express.json());
app.route('/').put((req, res) => {
  author = req.body.author;
  res.send(author);
});

// DELETE
app.route('/:identificador').delete((req, res) => {
  res.send(req.params.identificador);
});
