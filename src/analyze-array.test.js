import { test, expect } from '@jest/globals';
import { analyze } from './analyze-array.js';

test('test average', () => {
    expect(analyze([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test('test min', () => {
    expect(analyze([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test('test max', () => {
    expect(analyze([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test('test length', () => {
    expect(analyze([1, 8, 3, 4, 2, 6]).length).toBe(6);
});

test('xyz is abc', () => {
    expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});
