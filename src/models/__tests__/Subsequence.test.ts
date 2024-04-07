import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import Subsequence from '../Subsequence';

describe('Subsequence model', () => {
  let mongoServer: MongoMemoryServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  beforeEach(async () => {
    await Subsequence.deleteMany({});
  });

  it('should create a subsequence', async () => {
    const subsequenceData = { subsequences: [[1], [2], [1, 2]] };
    const subsequence = new Subsequence(subsequenceData);
    const savedSubsequence = await subsequence.save();

    expect(savedSubsequence.subsequences).toEqual(subsequenceData.subsequences);
    expect(savedSubsequence.createdAt).toBeDefined();
    expect(savedSubsequence._id).toBeDefined();
  });
});
