import express from 'express';

import orderRoutes from './routes/orderRoutes';
import authRoutes from './routes/authRoutes';
import connectDB from './database/dbConnection';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use('/api/orders', orderRoutes);
app.use('/api', authRoutes);

void connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
