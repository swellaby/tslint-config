'use strict';

const assert = require('chai').assert;
const config = require('../../lib');

suite('index Suite:', () => {
    test('Should extend the correct configurations', () => {
        assert.deepEqual(config.extends.length, 3);
        assert.isTrue(config.extends.includes('./base.js'));
        assert.isTrue(config.extends.includes('./eslint-rules.js'));
        assert.isTrue(config.extends.includes('./microsoft-contrib-rules.js'));
    });
});
