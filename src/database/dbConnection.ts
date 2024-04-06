import mongoose from 'mongoose';

const MONGO_DB_URI =
  process.env.MONGO_DB_URI ?? 'mongodb://localhost:27017/recommendationsDB';

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_DB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};

export default connectDB;
