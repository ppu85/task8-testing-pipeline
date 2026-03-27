// Koodi luotu Google Geminillä
import { expect } from 'chai';
import compact from '../src/compact.js'; // Varmista, että polku osoittaa oikeaan kansioon!

describe('Compact.js Tests', () => {
    it('should remove all falsey values from array', () => {
        const input = [0, 1, false, 2, '', 3];
        const result = compact(input);
        
        // Odotettu tulos: [1, 2, 3]
        expect(result).to.deep.equal([1, 2, 3]);
    });
});