'use strict';

const assert = require('chai').assert;
const utils = require('./utils');

suite('base Rules Tests:', () => {
    test('Should fail on bad files', () => {
        const args = `${utils.baseTestContextDirPath}/**/*.ts`;
        const result = utils.runTSLint(args);
        assert.notDeepEqual(result.code, utils.successfulReturnCode);
    });

    test('Should pass on good files', () => {
        const args = `${utils.baseTestContextDirPath}/good.ts`;
        const result = utils.runTSLint(args);
        assert.deepEqual(result.code, utils.successfulReturnCode);
    });
});
