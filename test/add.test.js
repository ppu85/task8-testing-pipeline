// Luotu Google Geminillä
import { expect } from 'chai';
import add from '../src/add.js';

describe('Add.js Tests', () => {
    it('should add two positive numbers', () => {
        expect(add(6, 4)).to.equal(10);
    });
    
    it('should add a positive and a negative number', () => {
        expect(add(6, -4)).to.equal(2);
    });
});