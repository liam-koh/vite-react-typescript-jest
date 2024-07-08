export default {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest', // 추가
     "node_modules/@o2pluss+\\.(j|t)sx?$": "ts-jest"
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!@o2pluss)/',

  ],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.ts',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
}