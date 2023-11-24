import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'

import indexRoutes from './routes/index.routes.js'
dotenv.config()

const app = express()

// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(
  cors(
    {
      origin: 'http://localhost:4200'
    },
    {
      origin: 'http://jerogassan.dev'
    }
  )
)

// Routes
app.use('/api', indexRoutes)

export default app
