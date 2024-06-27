// test/test.js
const { expect } = require('chai');

describe('Array', function() {
  it('should start empty', function() {
    const arr = [];

    expect(arr).to.be.an('array').that.is.empty;
  });
});

