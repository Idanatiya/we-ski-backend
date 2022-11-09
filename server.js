const express =  require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
//error handler
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 3000


const app = express() 

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors()) 



app.use('/api/hotels', require('./routes/searchRoutes'))
app.use(errorHandler)


app.listen(port, () => console.log(`Sever has started on port ${port}!`))