const express =  require('express')
const app = express()

//To verify things are working fine
app.use('/', (request, response) => {
  response.send('Hello, World!')
})

// Hard coding for instance, shall be using process.env.PORT
const port = 5000

// start server
app.listen(port, () => console.log(`Server started at port: ${port}`))