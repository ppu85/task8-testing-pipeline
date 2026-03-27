import { expect } from 'chai';
import filter from '../src/filter.js';

describe('filter.js Tests', () => {
    it('should filter elements based on predicate', () => {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred',   'active': false }
        ];
        const result = filter(users, ({ active }) => active);
        expect(result).to.deep.equal([{ 'user': 'barney', 'active': true }]);
    });
});