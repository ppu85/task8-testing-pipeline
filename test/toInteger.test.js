import { expect } from 'chai';
import toInteger from '../src/toInteger.js';

describe('toInteger.js Tests', () => {
    it('should convert number to integer', () => {
        expect(toInteger(3.2)).to.equal(3);
        expect(toInteger(Number.MIN_VALUE)).to.equal(0);
        expect(toInteger(Infinity)).to.equal(1.7976931348623157e+308);
    });
});