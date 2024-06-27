import { expect } from 'chai';  

describe('Array', () => {
    it('should start empty', () => {
        const arr = [];

        expect(arr).to.be.an('array').that.is.empty;
    });
});
