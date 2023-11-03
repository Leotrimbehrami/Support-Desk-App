import { fileURLToPath } from 'url';
import path from 'path';
import express from 'express';
import { config as dotenvConfig } from "dotenv";
import colors from 'colors';
import { errorHandler } from './middleware/errorMiddleware.js';
import { userRouter } from './routes/userRoutes.js';
import { connectDB } from './config/db.js';
import { ticketRouter } from './routes/ticketRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenvConfig();

const PORT = process.env.PORT || 4500;

// connect to database
connectDB();

const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/users', userRouter);
app.use('/api/tickets', ticketRouter);

// Serve Frontend
if (process.env.NODE_ENV === 'production') {
  // Set build folder as static
  app.use(express.static(path.join(__dirname, "../frontend/build")));


  // FIX: below code fixes app crashing on refresh deployment
  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
  });
} else {
  app.get('/', (_, res) => {
    res.status(200).json({ message: 'Welcome to the Support Desk API' });
  });
}

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
