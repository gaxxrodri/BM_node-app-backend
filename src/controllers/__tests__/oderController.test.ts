import request from 'supertest';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { getRecommendations, postOrderHistory } from '../orderController';
import connectDB from '../../database/dbConnection';
import Subsequence from '../../models/Subsequence';

const app = express();
app.use(bodyParser.json());

app.post('/api/orders/history', postOrderHistory);
app.get('/api/orders/recommendations', getRecommendations);

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await mongoose.connection.close();
});

beforeEach(async () => {
  jest.clearAllMocks();
  await mongoose.connection.dropDatabase();
});

describe('OrderController', () => {
  describe('POST /api/orders/history', () => {
    it('should save order history and return success message', async () => {
      const response = await request(app)
        .post('/api/orders/history')
        .send({ sequence: [1, 2] });

      expect(response.statusCode).toBe(200);
      expect(response.body.newSubsequence.subsequences).toStrictEqual([[1], [2], [1, 2]]);
    });

    it('should return 400 if sequence parameter is missing', async () => {
      const response = await request(app)
        .post('/api/orders/history')
        .send({});

      expect(response.statusCode).toBe(400);
      expect(response.text).toBe('{"message":"Sequence parameter is required"}');
    });

    it('should return 500 if there is a database error when saving order sequence', async () => {
      const saveMock = jest.spyOn(Subsequence.prototype, 'save').mockRejectedValueOnce(new Error('Database save error'));

      const response = await request(app)
        .post('/api/orders/history')
        .send({ sequence: [1, 2, 3] });

      expect(response.statusCode).toBe(500);
      expect(response.text).toContain('Error saving order sequence');

      saveMock.mockRestore();
    });
  });

  describe('GET /api/orders/recommendations', () => {
    it('should fetch recommendations', async () => {
      const response = await request(app).get('/api/orders/recommendations');

      expect(response.statusCode).toBe(200);
      expect(response.body).toStrictEqual([]);
    });

    it('should return 500 if there is a database error', async () => {
      const findMock = jest.spyOn(Subsequence, 'find').mockImplementation(() => ({
        exec: jest.fn().mockRejectedValue(new Error('Error fetching recommendations'))
      }) as any);

      const response = await request(app).get('/api/orders/recommendations');
      expect(response.statusCode).toBe(500);
      expect(response.text).toContain('Error fetching recommendations');

      findMock.mockRestore();
    });
  });
});
