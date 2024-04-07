import request from 'supertest';
import express from 'express';
import authRoutes from '../authRoutes';
import jwt from 'jsonwebtoken';

const app = express();

process.env.JWT_SECRET = 'test-secret';
process.env.JWT_EXPIRATION = '1h';

app.use(express.json());
app.use('/api', authRoutes);

describe('POST /api/auth', () => {
  it('should generate a token and return 200 status code', async () => {
    const response = await request(app)
      .post('/api/auth')
      .expect(200);

    expect(response.body).toHaveProperty('token');
  });

  it('should return 500 Internal Server Error when token generation fails', async () => {
    const jwtSignMock = jest.spyOn(jwt, 'sign').mockImplementationOnce(() => {
      throw new Error('Token generation failed');
    });

    const response = await request(app)
      .post('/api/auth')
      .send();

    expect(response.statusCode).toBe(500);
    expect(response.body).toEqual({
      message: 'Internal server error generating token'
    });

    jwtSignMock.mockRestore();
  });
});
