import { expect } from 'chai';
import endsWith from '../src/endsWith.js';

describe('endsWith.js Tests', () => {
    it('should return true if string ends with target', () => {
        expect(endsWith('abc', 'c')).to.be.true;
    });
    it('should return false if string does not end with target', () => {
        expect(endsWith('abc', 'b')).to.be.false;
    });
});