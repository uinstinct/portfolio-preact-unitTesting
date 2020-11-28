module.exports = {
    errorOnDeprecated: true,
    moduleNameMapper: {
        "^@/containers(.*)$": "<rootDir>/containers$1",
        "^@/pages(.*)$": "<rootDir>/pages$1",
        "^@/styles(.*)$": "<rootDir>/styles$1",
    },
    setupFilesAfterEnv: ["<rootDir>/tests/setupTests.js"],
    testTimeout: 7000,
    transform: {
        "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest"
    },
    verbose: false,
};