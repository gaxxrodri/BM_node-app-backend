import express from 'express';

import orderRoutes from './routes/orderRoutes';
import connectDB from './database/dbConnection';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use('/orders', orderRoutes);

void connectDB().then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
