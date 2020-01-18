const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();
const { data } = require('./data');

app.use(bodyParser.json());

app.use(cors());

const candidates = data.map((candidate, index) => ({ ...candidate, id: index }));

app.get('/api/candidates', (req, res) => {
  res.send(candidates);
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});