'use strict';

const assert = require('chai').assert;
const config = require('../lib/microsoft-contrib-rules');

suite('microsoft-contrib-rules Suite:', () => {
    test('Should provide the correct rule directory', () => {
        assert.deepEqual(config.rulesDirectory, 'tslint-microsoft-contrib');
    });
});