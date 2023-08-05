const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  moduleFileExtensions: ['js', 'ts', 'json'],
  moduleDirectories: [__dirname, 'src', 'node_modules'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^typeorm$': '<rootDir>/src/tests/__mocks__/typeorm.ts',
  },
};

export default config;
