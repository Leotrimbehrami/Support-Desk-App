import express from 'express'
import "dotenv/config";
import { errorHandler } from './middleware/errorMiddleware.js';
import { userRouter } from './routes/userRoutes.js';

const PORT = process.env.PORT || 4500
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req,res) => {
  res.status(201).json({message: 'Welcome'})
})

// Routes
app.use('/api/users', userRouter)

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))