import { expect } from 'chai';
import defaultTo from '../src/defaultTo.js';

describe('defaultTo.js Tests', () => {
    it('should return value if not NaN, null, or undefined', () => {
        expect(defaultTo(1, 10)).to.equal(1);
    });
    it('should return defaultValue if value is null', () => {
        expect(defaultTo(null, 10)).to.equal(10);
    });
    it('should return defaultValue if value is undefined', () => {
        expect(defaultTo(undefined, 10)).to.equal(10);
    });
});