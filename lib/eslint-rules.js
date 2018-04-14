'use strict';

const utils = require('./utils');

module.exports = {
    rulesDirectory: 'tslint-eslint-rules',
    rules: {
        'array-bracket-spacing': false,
        'block-spacing': [
            true,
            utils.ruleSettings.always
        ],
        indent: [
            true,
            'spaces',
            4
        ],
        'no-ex-assign': true,
        'no-extra-boolean-cast': true,
        'no-extra-semi': true,
        'no-irregular-whitespace': true,
        'no-multi-spaces': true,
        'no-sparse-arrays': true,
        'object-curly-spacing': [
            true,
            utils.ruleSettings.always
        ],
    }
};