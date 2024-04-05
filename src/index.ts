import express from 'express';
import mongoose from 'mongoose';

import orderRoutes from './routes/orderRoutes';

const app = express();
const PORT = process.env.PORT ?? 3000;
const MONGO_URI =
  process.env.MONGO_DB_URI ?? 'mongodb://mongodb:27017/recommendationsDB';
const MONGO_URI_DEV = 'mongodb://localhost:27017/yourDatabase';

app.use(express.json());

app.use('/orders', orderRoutes);

mongoose
  .connect(MONGO_URI_DEV)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });
