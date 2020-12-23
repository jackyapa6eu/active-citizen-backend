const express = require('express');
const port = process.env.PORT || 3000
const bodyParser = require('body-parser');
const poems = require('./routes/poems.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', poems);
app.use((req, res) => {
  res.status(404).send({ "message": "Запрашиваемый ресурс не найден" }); 
});

app.listen(port,() => {
  console.log(`Server running at port `+ port);
});