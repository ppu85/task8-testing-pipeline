import { expect } from 'chai';
import upperFirst from '../src/upperFirst.js';

describe('upperFirst.js Tests', () => {
    it('should convert first letter to upper case', () => {
        expect(upperFirst('fred')).to.equal('Fred');
        expect(upperFirst('FRED')).to.equal('FRED');
    });
});