module.exports = {
  testEnvironment: "node",
  testMatch: ["**/test-jest/**/*.test.js", "**/tests-jest/**/*.test.js"],
  testPathIgnorePatterns: ["<rootDir>/tests/"], // ignore Playwright E2E
  verbose: true,
  silent: true,
};
