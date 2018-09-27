const assert = require('assert');

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
  describe('#working unit test', () => {
      it('should pass', () => {
          assert.ok(true);
      })
  })
});