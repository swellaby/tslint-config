'use strict';

const assert = require('chai').assert;
const config = require('../lib/eslint-rules');

suite('eslint-rules Suite:', () => {
    test('Should provide the correct rule directory', () => {
        assert.deepEqual(config.rulesDirectory, 'tslint-eslint-rules');
    });
});