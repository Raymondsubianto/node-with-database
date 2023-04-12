const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//import route posts
const postsRouter = require('./routes/posts');
app.use('/api/posts', postsRouter); // use route posts di Express

app.listen(port, function() {
  console.log(`app running at http://localhost:${port}`)
})