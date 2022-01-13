const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json())

const reqHandler = (_req, res) => {
  res.status(200).json({ message: 'pong' });
}

app.get('/ping', reqHandler );

app.listen(3001, () => {
  console.log('Escutando porta 3001');
})

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.json({ "name": ` Hello ${name}`});
})
