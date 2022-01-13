const express = require('express');

const app = express();

const reqHandler = (_req, res) => {
  res.status(200).json({ message: 'pong' });
}

app.get('/ping', reqHandler );

app.listen(3001, () => {
  console.log('Escutando porta 3001');
})
