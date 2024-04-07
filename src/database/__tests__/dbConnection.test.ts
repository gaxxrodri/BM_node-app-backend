import mongoose from 'mongoose';
import connectDB from '../dbConnection';

jest.mock('mongoose', () => ({
  connect: jest.fn()
}));
jest.spyOn(console, 'log').mockImplementation(() => {});

describe('Database Connection', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should connect to MongoDB successfully', async () => {
    (mongoose.connect as jest.Mock).mockResolvedValue('Connected');

    await connectDB();

    expect(mongoose.connect).toHaveBeenCalledWith(process.env.MONGO_DB_URI ?? 'mongodb://localhost:27017/recommendationsDB');
    expect(console.log).toHaveBeenCalledWith('Connected to MongoDB');
  });
});
