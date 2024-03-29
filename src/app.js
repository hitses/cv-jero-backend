import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'

import indexRoutes from './routes/index.routes.js'
import { origins } from './config/cors.config.js'
dotenv.config()

const app = express()

// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors(origins))

// Routes
app.use('/api', indexRoutes)

export default app
