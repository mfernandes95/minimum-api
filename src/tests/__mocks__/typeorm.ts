export const createConnection = jest.fn().mockResolvedValue(null);
export const getRepository = jest.fn().mockReturnValue({
  find: jest.fn().mockResolvedValue([]),
  findOne: jest.fn().mockResolvedValue(null),
  create: jest.fn().mockReturnValue({}),
  save: jest.fn().mockResolvedValue({}),
  remove: jest.fn().mockResolvedValue({}),
});
