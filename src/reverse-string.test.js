import { test, expect } from '@jest/globals';
import { reverseString } from './reverse-string.js';

test('Javascript must be tpircsavaJ', () => {
    expect(reverseString('Javascript')).toBe('tpircsavaJ');
});

test('empty string case', () => {
    expect(reverseString('')).toBe('');
});
