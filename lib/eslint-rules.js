'use strict';

module.exports = {
    rulesDirectory: 'tslint-eslint-rules',
    rules: {
        'array-bracket-spacing': false,
        'block-spacing': [
            true,
            'always'
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
        'object-curly-spacing': [true,
            'always'
        ],
    }
};