module.exports = {
  roots: ["<rootDir>/test"],
  moduleNameMapper: {
    "/src/(.*)": "<rootDir>/src/$1"
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  }
};
