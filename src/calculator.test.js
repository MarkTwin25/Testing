import { test, expect } from '@jest/globals';
import { calculatorObj } from './calculator.js';

test('adds two numbers', () => {
    expect(calculatorObj.add(1, 2)).toBe(3);
});

test('subtracts two numbers', () => {
    expect(calculatorObj.subtract(5, 3)).toBe(2);
});

test('divides two numbers', () => {
    expect(calculatorObj.divide(10, 2)).toBe(5);
});

test('multiplies two numbers', () => {
    expect(calculatorObj.multiply(5, 2)).toBe(10);
});

test('Object musb contains all basic operations', () => {
    expect(calculatorObj).toHaveProperty('add');
    expect(calculatorObj).toHaveProperty('subtract');
    expect(calculatorObj).toHaveProperty('divide');
    expect(calculatorObj).toHaveProperty('multiply');
});
