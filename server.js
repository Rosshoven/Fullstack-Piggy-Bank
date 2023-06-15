var express = require('express');
var app = express();
const port = 3000

var cors = require('cors');



app.use(express.static('/client/public/index.html'));
app.use(cors());

// app.get('/', (req, res) => {
//     res.send('hello whore')
//   })





app.listen(port, () => {
console.log(`Porto Porto Porto ${port}`)
  })
