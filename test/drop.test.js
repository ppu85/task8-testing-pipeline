import { expect } from 'chai';
import drop from '../src/drop.js';

describe('drop.js Tests', () => {
    it('should drop the first element by default', () => {
        expect(drop([1, 2, 3])).to.deep.equal([2, 3]);
    });
    it('should drop n elements', () => {
        expect(drop([1, 2, 3], 2)).to.deep.equal([3]);
    });
    it('should return empty array if dropping more elements than length', () => {
        expect(drop([1, 2, 3], 5)).to.deep.equal([]);
    });
});