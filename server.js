const express =  require('express')
const app = express()
const mongoose = require('mongoose')
const { db } = require('./config/db')
const bodyParser = require('body-parser')
const routes = require('./routes')
const { setResponse } = require('./utils')
const { RESPONSE_STATUS } = require('./constants')

mongoose
  .connect(db,{useNewUrlParser: true })
  .then(() => console.log('Database connected'))
  .catch(err => console.log(err))

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended : true }))
 
// authentication middleware to be added here

//Routes
app.use('/', routes)

app.use((request, response) => 
  setResponse(response, {
    status: RESPONSE_STATUS.NOT_FOUND,
    detail: `Requestd URL : ${request.originalUrl}`
  })
)

// Hard coding for instance, shall be using process.env.PORT
const port = 5000

// start server
app.listen(port, () => console.log(`Server started at port: ${port}`))