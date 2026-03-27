// Koodi luotu Google Geminillä
import { expect } from 'chai';
import castArray from '../src/castArray.js';

describe('castArray.js Tests', () => {
    it('should wrap a value in an array', () => {
        expect(castArray(1)).to.deep.equal([1]);
    });
    
    it('should return the same array if an array is passed', () => {
        const arr = [1, 2, 3];
        expect(castArray(arr)).to.equal(arr);
    });
});