import { test, expect } from '@jest/globals';
import { capitalize } from './capitalize.js';

test('javascript is Javascript', () => {
    expect(capitalize('javascript')).toBe('Javascript');
});

test('empty string case', () => {
    expect(capitalize('')).toBe('');
});
