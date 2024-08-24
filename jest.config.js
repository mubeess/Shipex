module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest', // Use babel-jest to transform JavaScript/TypeScript files
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-reanimated|@gorhom/bottom-sheet)/)', // Allow Jest to transform ES modules in specified libraries
  ],
  setupFiles: ['./jest-setup.js'], // Add any setup files if necessary
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js', // Mock CSS/LESS imports if necessary
  },
};
