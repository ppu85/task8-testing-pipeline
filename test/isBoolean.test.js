import { expect } from 'chai';
import isBoolean from '../src/isBoolean.js';

describe('isBoolean.js Tests', () => {
    it('should return true for false', () => {
        expect(isBoolean(false)).to.be.true;
    });
    it('should return false for a string', () => {
        expect(isBoolean('false')).to.be.false;
    });
});