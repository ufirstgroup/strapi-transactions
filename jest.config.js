module.exports = {
  globalSetup: '<rootDir>/globalSetup.js',
  globalTeardown: '<rootDir>/globalTeardown.js',
  testPathIgnorePatterns: ['node_modules/', '.tmp', '.cache', 'dist/'],
  testTimeout: 20000,
}
