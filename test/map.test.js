import { expect } from 'chai';
import map from '../src/map.js';

describe('map.js Tests', () => {
    it('should map values using an iteratee', () => {
        const square = (n) => n * n;
        expect(map([4, 8], square)).to.deep.equal([16, 64]);
    });
});