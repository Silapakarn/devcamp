const express = require('express')
const cors = require('cors')
const userRoutes = require('./src/routes/user')
require('./src/lib/connection')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api/user', userRoutes)

app.listen(process.env.PORT || 3000, () => console.log(`server running on port 3000`))