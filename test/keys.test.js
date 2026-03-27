import { expect } from 'chai';
import keys from '../src/keys.js';

describe('keys.js Tests', () => {
    it('should return keys of an object', () => {
        function Foo() {
            this.a = 1;
            this.b = 2;
        }
        expect(keys(new Foo())).to.deep.equal(['a', 'b']);
    });
});