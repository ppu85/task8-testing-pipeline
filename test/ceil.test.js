// koodi luotu Google Geminillä
import { expect } from 'chai';
import ceil from '../src/ceil.js';

describe('ceil.js Tests', () => {
    it('should round up a number', () => {
        expect(ceil(4.006)).to.equal(5);
    });
    
    it('should round up with precision', () => {
        expect(ceil(6.004, 2)).to.equal(6.01);
    });
});