import request from 'supertest';
import app from '../app'
import { getRepository } from 'typeorm';
import MyDataSource from '../../src/database/index'
import UserEntity from '../../src/database/entities/user.entity'


describe('User API', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch all users', async () => {
    // const userRepository = MyDataSource.getRepository(UserEntity)
    const userRepository = getRepository(UserEntity);
    // userRepository.find.mockResolvedValueOnce([{ id: 1, name: 'John Doe', email: 'john@example.com' }]);

    const res = await request(app).get('/api/users');
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
  });

//   it('should create a new user', async () => {
//     const userRepository = MyDataSource.getRepository(UserEntity)
//     const userRepository = getRepository();
//     userRepository.create.mockReturnValueOnce({ id: 1, name: 'Jane Smith', email: 'jane@example.com' });
//     userRepository.save.mockResolvedValueOnce({ id: 1, name: 'Jane Smith', email: 'jane@example.com' });

//     const res = await request(app).post('/users').send({ name: 'Jane Smith', email: 'jane@example.com' });
//     expect(res.status).toBe(201);
//     expect(res.body).toMatchObject({ id: 1, name: 'Jane Smith', email: 'jane@example.com' });
//   });

  // Add more tests for your API endpoints
});