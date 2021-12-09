import type {Config} from '@jest/types';
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [".d.ts", ".js"]
};
