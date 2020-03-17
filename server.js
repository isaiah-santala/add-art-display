const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000

app.use(express.static(`${__dirname}/public`))

app.post('/upload/image', (req, res) => {
  
})

app.listen(PORT, () => console.log('...listening on port:' + PORT))