import { expect } from 'chai';
import divide from '../src/divide.js';

describe('divide.js Tests', () => {
    it('should divide two numbers', () => {
        expect(divide(6, 4)).to.equal(1.5);
    });
});