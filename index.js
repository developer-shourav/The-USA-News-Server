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
  const singleNews = news.find( n => n._id === iD ) ;
  res.send(singleNews)

})

app.get('/catagories/:id', (req, res) => {
  const iD = req.params.id;
  if( iD == 0){
    res.send(news)
  }
  else{
    const sameCategoriesNew = news.filter( n => n.category_id === iD);
    res.send(sameCategoriesNew)
  }
})

app.listen(port , () => {
    console.log(`The USA New is running on Port: ${port}` );
})

     