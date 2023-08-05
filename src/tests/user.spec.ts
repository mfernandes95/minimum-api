import request from 'supertest'
import app from '../app'
import { getRepository } from 'typeorm';

// describe('User', () => {
//     test('should return users', async() => {
//         const result = await request(app).get('/api/users')
//         expect(result.statusCode).toEqual(200)
//     })
// })
// jest.mock('typeorm', () => {
    // repoMock.find.mockResolvedValue(['ok']);

describe('GET /users', () => {

//     beforeEach(() => {
//     // Clear mock implementations and mock responses before each test
//     jest.clearAllMocks();
//   });

    it('should return users', async () => {
    // Mock the response from getRepository
    // const mockUsers = [{ id: 1, name: 'John Doe', city: 'Tokyo', country: 'Australia',  favorite_sport: 'Running'}];
    // (getRepository as jest.Mock).mockReturnValue({
    //   find: jest.fn().mockResolvedValue(mockUsers),
    // });
        console.log("111111111111111111111111111111");
    const response = await request(app).get('/api/users');

    expect(response.status).toBe(200);
    // expect(response.body).toEqual(mockUsers);
  });

    // it('should return users', async () => {
    //   // Mock the response from getRepository
    //   const mockUsers = [{ id: 1, name: 'John Doe', email: 'john@example.com' }];
    //   (getRepository as jest.Mock).mockReturnValue({
    //     find: jest.fn().mockResolvedValue(mockUsers),
    //   });
  
    //   const response = await request(app).get('/api/users');
  
    //   expect(response.status).toBe(200);
    //   expect(response.body).toEqual(mockUsers);
    // });
  
    // Add other test cases as needed
  });




// import supertest from 'supertest'
// import app from '../app'

// describe('root endpoint get and post', () => {
//     test('get root returns 200 and data', async () => {
//         const result = await supertest(app).get('/')
//         // expect(result.statusCode).toEqual(200)
//         // expect(result.body.name).toBeTruthy()
//     })

//     test('post root echoes json', async () => {
//         const result = await supertest(app).post('/').send(
//             {
//                 'test': 'value'
//             })
//         // expect(result.statusCode).toEqual(200)
//         // expect(result.body).toBeTruthy()
//         // expect(result.body.test).toBe('value')
//     })

//     test('404 & json returned from nonexistent route', async () => {
//         const result = await supertest(app).get('/badPath')
//         // expect(result.statusCode).toEqual(404)
//         // expect(result.body.message).toBeTruthy()
//     })
// })