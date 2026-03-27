import { expect } from 'chai';
import eq from '../src/eq.js';

describe('eq.js Tests', () => {
    it('should return true for same string values', () => {
        expect(eq('a', 'a')).to.be.true;
    });
    it('should return false for different values', () => {
        expect(eq('a', 'b')).to.be.false;
    });
});