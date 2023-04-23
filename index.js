const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000 ;

const catagories = require('./data/categories.json');
const news = require('./data/news.json');



app.use(cors());

app.get('/', (req, res) => {
  res.send('The USA News is running')
});

app.get('/catagories', (req, res) => {
    res.send(catagories)
})

app.get('/news', (req, res) => {
  res.send(news)
})

app.get('/news/:id', (req, res) => {
  const iD = req.params.id;
  const singleNews = news.find( n => n._id == iD ) ;
  res.send(singleNews)

})


app.listen(port , () => {
    console.log(`The USA New is running on Port: ${port}` );
})

