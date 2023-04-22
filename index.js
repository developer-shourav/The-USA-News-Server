const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000 ;

const catagories = require('./data/categories.json');


app.use(cors());

app.get('/', (req, res) => {
  res.send('The USA News is running')
});

app.get('/catagories', (req, res) => {
    res.send(catagories)
})

app.listen(port , () => {
    console.log(`The USA New is running on Port: ${port}` );
})

