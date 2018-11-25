'use strict';

const assert = require('chai').assert;
const utils = require('../../lib/utils');

suite('utils Suite:', () => {
    test('Should have correct value for always setting', () => {
        assert.deepEqual(utils.ruleSettings.always, 'always');
    });

    test('Should have correct value for as-needed setting', () => {
        assert.deepEqual(utils.ruleSettings.asNeeded, 'as-needed');
    });

    test('Should have correct value for never setting', () => {
        assert.deepEqual(utils.ruleSettings.never, 'never');
    });
});
