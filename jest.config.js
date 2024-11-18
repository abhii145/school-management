/* eslint-disable @typescript-eslint/no-require-imports */
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/app/(.*)$": "<rootDir>/app/$1",
    "^.+\\.(css|scss|sass)$": "identity-obj-proxy",
    "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$":
      "<rootDir>/__mocks__/fileMock.js",
  },
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  collectCoverage: true,
  collectCoverageFrom: [
    "app/**/*.{js,jsx,ts,tsx}",
    "lib/**/*.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!**/.next/**",
    "!**/coverage/**",
    "!jest.config.js",
  ],

  coverageThreshold: {
    global: {
      statements: 77,
      branches: 70,
      functions: 75,
      lines: 77,
    },
  },

  coverageDirectory: "coverage",
};

module.exports = createJestConfig(customJestConfig);
