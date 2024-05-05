import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { corsOptions } from './config/cors.js'
//import kitty from './modal/testModal.js'
import router from './routes/index.js'
import { env } from './config/enviroment.js'
import { errorHandlingMiddleware } from './middlewares/errorHandlingMiddleware.js'

const app = express()

app.use(cors(corsOptions))

//req.body json data
app.use(express.json())

//use routes
app.use('/', router)

//middlewares
app.use(errorHandlingMiddleware)

//conect db
const connectDB = () => mongoose.connect('mongodb://127.0.0.1:27017/test')

//start server
app.listen(env.APP_PORT, env.APP_HOST, connectDB(), async () => {
    await connectDB()
    console.log('Successfully connect to database')
    console.log(`Server is running on http://${env.APP_HOST}:${env.APP_PORT}/`)
})
