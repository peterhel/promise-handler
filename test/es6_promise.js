var assert = require('assert');
var swear = require('../index.js').es6;

describe('ES6 Promise', function() {
  describe('On successful execution', function() {
    function thisWillSucceed(callback) {
        callback(null, 'success');
      }

    it('will resolve promise', function(done) {
      swear(handler => thisWillSucceed(handler))
        .then(message => {
          assert.equal(message, 'success');
          done();
        })
        .catch(console.error);
    });
  });

  describe('On failed execution', function() {
    function thisWillFail(callback) {
        callback('error');
      }

    it('will reject promise', function(done) {
      swear(handler => thisWillFail(handler))
        .then(() => {})
        .catch(error => {
          assert.equal(error, 'error');
          done();
        });
    });
  });
});
