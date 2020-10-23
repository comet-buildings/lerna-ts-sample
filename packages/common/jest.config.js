module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.test.tsx?$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      diagnostics: true,
      tsConfig: "./tsconfig.json",
    },
  },
};
