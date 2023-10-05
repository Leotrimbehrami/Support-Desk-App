import express from 'express'
import "dotenv/config";

const PORT = process.env.PORT || 4500
const app = express()

app.get('/', (req,res) => {
  res.status(201).json({message: 'Welcome'})
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))