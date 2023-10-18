module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/build/tests/**/*.test.js'], // run tests against compiled .ts -> .js files
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  };