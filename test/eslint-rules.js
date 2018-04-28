'use strict';

const assert = require('chai').assert;
const config = require('../lib/eslint-rules');
const rules = config.rules;

suite('eslint-rules Suite:', () => {
    test('Should extend the tslint-eslint-rules config', () => {
        assert.deepEqual(config.extends.length, 1);
        assert.deepEqual(config.extends, [ 'tslint-eslint-rules' ]);
    });

    test('Should disable array-bracket-spacing rule', () => {
        assert.isFalse(rules['array-bracket-spacing']);
    });

    test('Should correctly configure block-space rule', () => {
        const blockSpacingRule = rules['block-spacing'];
        assert.isTrue(blockSpacingRule[0]);
        assert.deepEqual(blockSpacingRule[1], 'always');
    });

    test('Should correctly configure indent rule', () => {
        const indentRule = rules.indent;
        assert.isTrue(indentRule[0]);
        assert.deepEqual(indentRule[1], 'spaces');
        assert.deepEqual(indentRule[2], 4);
    });

    test('Should enable no-ex-assign rule', () => {
        assert.isTrue(rules['no-ex-assign']);
    });

    test('Should enable no-extra-boolean-cast rule', () => {
        assert.isTrue(rules['no-extra-boolean-cast']);
    });

    test('Should enable no-extra-semi rule', () => {
        assert.isTrue(rules['no-extra-semi']);
    });

    test('Should enable no-irregular-whitespace rule', () => {
        assert.isTrue(rules['no-irregular-whitespace']);
    });

    test('Should enable no-multi-spaces rule', () => {
        assert.isTrue(rules['no-multi-spaces']);
    });

    test('Should enable no-sparse-arrays rule', () => {
        assert.isTrue(rules['no-sparse-arrays']);
    });

    test('Should correctly configure object-curly-spacing rule', () => {
        const objectCurlySpacingRule = rules['object-curly-spacing'];
        assert.isTrue(objectCurlySpacingRule[0]);
        assert.deepEqual(objectCurlySpacingRule[1], 'always');
    });
});