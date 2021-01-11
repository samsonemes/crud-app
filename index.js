const express = require('express')
const cors = require('cors')
const morgan =require('morgan')

const app = express();

//middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())


//routes
app.use(require('./routes/post'))

app.get('/', (req, res) => {
    res.send('welcome')
})

const port = 5000

app.listen(port, () => console.log(`server running on PORT: ${port}`))