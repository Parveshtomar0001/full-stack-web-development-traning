  
  import express from 'express'
  import { connectToDatabase } from './db.js'

  const app = express()
  const port = 3000

  app.use(express.json())

  app.listen(port, async() => {
    console.log(`my server is runing at port ${port}`)
    await connectToDatabase('bank-db')
  })

  // test api
   app.get('/test-api',(request , response) => {
   response.send("api is  working")
   })