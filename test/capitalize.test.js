import { expect } from 'chai';
import capitalize from '../src/capitalize.js';

describe('capitalize.js Tests', () => {
    it('should capitalize the first letter of a string', () => {
        expect(capitalize('FRED')).to.equal('Fred');
        expect(capitalize('fred')).to.equal('Fred');
    });
});