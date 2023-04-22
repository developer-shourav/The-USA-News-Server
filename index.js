const express = require('express');
const app = express();
const port = process.env.PORT || 5000 ;


app.get('/', (req, res) => {
  res.send('The USA News is running')
});

app.listen(port , () => {
    console.log(`The USA New is running on Port: ${port}` );
})

