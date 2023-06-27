module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  transformIgnorePatterns: [
    "/node_modules/"
  ],
  moduleNameMapper: {
    '\\.css$': '<rootDir>/src/components/styleMock.js'
  }
};

