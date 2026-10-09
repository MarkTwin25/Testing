import { test, expect } from '@jest/globals';
import { caesar } from './caesar.js';

test('xyz is abc', () => {
    expect(caesar('xyz', 3)).toBe('abc');
});

test('HeLLo is KhOOr', () => {
    expect(caesar('HeLLo', 3)).toBe('KhOOr');
});

test('Hello, World!', () => {
    expect(caesar('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('supports shifts larger than the alphabet', () => {
    expect(caesar('abc', 29)).toBe('def');
});
