import express from 'express'
import colors from 'colors'
import "dotenv/config";
import { errorHandler } from './middleware/errorMiddleware.js';
import { userRouter } from './routes/userRoutes.js';
import { connectDB } from './config/db.js'
import { ticketRouter } from './routes/ticketRoutes.js';
const PORT = process.env.PORT || 4500

// connect to database
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req,res) => {
  res.status(201).json({message: 'Welcome'})
})

// Routes
app.use('/api/users', userRouter)
app.use("/api/tickets", ticketRouter);

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))