import { expect } from 'chai';
import toString from '../src/toString.js';

describe('toString.js Tests', () => {
    it('should convert null to empty string', () => {
        expect(toString(null)).to.equal('null');
    });
    it('should convert array to string', () => {
        expect(toString([1, 2, 3])).to.equal('1,2,3');
    });
});