const assert = require('assert');
const emotionRatingHook = require('../../server/services/emotions/hooks/emotion-rating');

describe('\'emotion-rating\' hook', () => {
  it.skip('runs the hook', () => {
    // A mock hook object
    const mock = {};
    // Initialize our hook with no options
    const hook = emotionRatingHook();

    // Run the hook function (which returns a promise)
    // and compare the resulting hook object
    return hook(mock).then(result => {
      assert.equal(result, mock, 'Returns the expected hook object');
    });
  });
});