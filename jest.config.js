// @vue/cli-plugin-unit-jest

module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue',
  ],
  transform: {
    // process *.vue file with vue-jest
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  modulePathIgnorePatterns: [
    // ignore files below when testing
    '<rootDir>/node_modules',
    '<rootDir>/build',
    '<rootDir>/dist',
  ],
  // testMatch: [
  //   // directories to locate test suite files
  //   '<rootDir>/src/**/*.test.[jt]s?(s)',
  // ],
  roots: [
    '<rootDir>/src', 
    '<rootDir>/tests',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/tests/setupTests.js',
  ],
  snapshotSerializers: [
    // Jest serializer for snapshots
    'jest-serializer-vue'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    // coverage range except for npm modules
    "**/*.{js,vue}",
    "!**/node_modules/**",
  ],
};
