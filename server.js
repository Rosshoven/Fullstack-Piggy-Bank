var express = require('express');
var app = express();
const port = 3000;





// app.use(express.static('client/public'));


app.get('/', (req, res) => {
    res.send('hello whore')
  })





app.listen(port, () => {
console.log(`Porto Porto Porto ${port}`)
  })
