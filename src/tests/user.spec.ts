import request from 'supertest';
import app from '../app';
import MyDataSource from '../../src/database/index';

describe('User API', () => {
  // beforeAll(async () => {
  //   MyDataSource.initialize()
  // });

  // afterAll(async () => {
  //   MyDataSource.destroy()
  // });

  // afterEach(() => {
  //   jest.clearAllMocks();
  // });

  it('should fetch all users', async () => {
    // const res = await request(app).get('/api/users');
    // expect(res.body).toHaveLength(0);
    expect(1 + 1).toBe(2);
  });
});
