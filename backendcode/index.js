const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const bodyparsing = require('body-parser')
const router = require('./Routes/routing')

app.use(bodyparsing.json())
app.use(bodyparsing.urlencoded({extended:false}))

const corsOptions = {

  origin: '*',
  Credential: true,
  optionSuccessStatus: 200
}
app.use(cors(corsOptions))

app.use('/',router)

// app.get('/', (req, res) => {
//   console.log("this is server hello world");
//   res.send('Hello World! working hard')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})