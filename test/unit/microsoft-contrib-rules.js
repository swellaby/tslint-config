'use strict';

const assert = require('chai').assert;
const config = require('../../lib/microsoft-contrib-rules');
const rules = config.rules;

suite('microsoft-contrib-rules Suite:', () => {
    test('Should not extend any other configs', () => {
        assert.isUndefined(config.extends);
    });

    test('Should provide the correct rule directory', () => {
        assert.deepEqual(config.rulesDirectory, 'tslint-microsoft-contrib');
    });

    test('Should enable chai-prefer-contains-to-index-of rule', () => {
        assert.isTrue(rules['chai-prefer-contains-to-index-of']);
    });

    test('Should enable chai-vague-errors rule', () => {
        assert.isTrue(rules['chai-prefer-contains-to-index-of']);
    });

    test('Should enable function-name rule', () => {
        assert.isTrue(rules['function-name']);
    });

    test('Should enable jquery-deferred-must-complete rule', () => {
        assert.isTrue(rules['jquery-deferred-must-complete']);
    });

    test('Should correctly configure max-func-body-length rule', () => {
        const maxFuncLenRule = rules['max-func-body-length'];
        assert.isTrue(maxFuncLenRule[0]);
        assert.deepEqual(maxFuncLenRule[1], 30);
        assert.deepEqual(maxFuncLenRule[2]['ignore-parameters-to-function-regex'], 'describe|suite');
    });

    test('Should enable mocha-avoid-only rule', () => {
        assert.isTrue(rules['mocha-avoid-only']);
    });

    test('Should enable mocha-no-side-effect-code rule', () => {
        assert.isTrue(rules['mocha-no-side-effect-code']);
    });

    test('Should enable mocha-unneeded-done rule', () => {
        assert.isTrue(rules['mocha-unneeded-done']);
    });

    test('Should not enable no-backbone-get-set-outside-model rule', () => {
        assert.isUndefined(rules['no-backbone-get-set-outside-model']);
    });

    test('Should enable no-banned-terms rule', () => {
        assert.isTrue(rules['no-banned-terms']);
    });

    test('Should enable no-constant-condition rule', () => {
        assert.isTrue(rules['no-constant-condition']);
    });

    test('Should enable no-control-regex rule', () => {
        assert.isTrue(rules['no-control-regex']);
    });

    test('Should enable no-delete-expression rule', () => {
        assert.isTrue(rules['no-delete-expression']);
    });

    test('Should enable no-disable-auto-sanitization rule', () => {
        assert.isTrue(rules['no-disable-auto-sanitization']);
    });

    test('Should enable no-document-domain rule', () => {
        assert.isTrue(rules['no-document-domain']);
    });

    test('Should enable no-document-write rule', () => {
        assert.isTrue(rules['no-document-write']);
    });

    test('Should enable no-duplicate-case rule', () => {
        assert.isTrue(rules['no-duplicate-case']);
    });

    test('Should enable no-duplicate-parameter-names rule', () => {
        assert.isTrue(rules['no-duplicate-parameter-names']);
    });

    test('Should enable no-empty-interface rule', () => {
        assert.isTrue(rules['no-empty-interface']);
    });

    test('Should enable no-exec-script rule', () => {
        assert.isTrue(rules['no-exec-script']);
    });

    test('Should enable no-function-constructor-with-string-args rule', () => {
        assert.isTrue(rules['no-function-constructor-with-string-args']);
    });

    test('Should enable no-function-expression rule', () => {
        assert.isTrue(rules['no-function-expression']);
    });

    test('Should enable no-invalid-regexp rule', () => {
        assert.isTrue(rules['no-invalid-regexp']);
    });

    test('Should enable no-jquery-raw-elements rule', () => {
        assert.isTrue(rules['no-jquery-raw-elements']);
    });

    test('Should enable no-missing-visibility-modifiers rule', () => {
        assert.isTrue(rules['no-missing-visibility-modifiers']);
    });

    test('Should disable no-multiline-string rule', () => {
        assert.isFalse(rules['no-multiline-string']);
    });

    test('Should enable no-multiple-var-decl rule', () => {
        assert.isTrue(rules['no-multiple-var-decl']);
    });

    test('Should enable no-octal-literal rule', () => {
        assert.isTrue(rules['no-octal-literal']);
    });

    test('Should enable no-regex-spaces rule', () => {
        assert.isTrue(rules['no-regex-spaces']);
    });

    test('Should enable no-reserved-keywords rule', () => {
        assert.isTrue(rules['no-reserved-keywords']);
    });

    test('Should enable no-single-line-block-comment rule', () => {
        assert.isTrue(rules['no-single-line-block-comment']);
    });

    test('Should enable no-string-based-set-immediate rule', () => {
        assert.isTrue(rules['no-string-based-set-immediate']);
    });

    test('Should enable no-string-based-set-interval rule', () => {
        assert.isTrue(rules['no-string-based-set-interval']);
    });

    test('Should enable no-string-based-set-timeout rule', () => {
        assert.isTrue(rules['no-string-based-set-timeout']);
    });

    test('Should enable no-typeof-undefined rule', () => {
        assert.isTrue(rules['no-typeof-undefined']);
    });

    test('Should enable no-unnecessary-bind rule', () => {
        assert.isTrue(rules['no-unnecessary-bind']);
    });

    test('Should enable no-unnecessary-field-initialization rule', () => {
        assert.isTrue(rules['no-unnecessary-field-initialization']);
    });

    test('Should enable no-unnecessary-local-variable rule', () => {
        assert.isTrue(rules['no-unnecessary-local-variable']);
    });

    test('Should enable no-unnecessary-override rule', () => {
        assert.isTrue(rules['no-unnecessary-override']);
    });

    test('Should enable no-unnecessary-semicolons rule', () => {
        assert.isTrue(rules['no-unnecessary-semicolons']);
    });

    test('Should enable no-with-statement rule', () => {
        assert.isTrue(rules['no-with-statement']);
    });

    test('Should enable non-literal-require rule', () => {
        assert.isTrue(rules['non-literal-require']);
    });

    test('Should enable possible-timing-attack rule', () => {
        assert.isTrue(rules['possible-timing-attack']);
    });

    test('Should enable prefer-array-literal rule', () => {
        assert.isTrue(rules['prefer-array-literal']);
    });

    test('Should enable prefer-type-cast rule', () => {
        assert.isTrue(rules['prefer-type-cast']);
    });

    test('Should enable promise-must-complete rule', () => {
        assert.isTrue(rules['promise-must-complete']);
    });

    test('Should enable underscore-consistent-invocation rule', () => {
        assert.isTrue(rules['underscore-consistent-invocation']);
    });

    test('Should enable use-named-parameter rule', () => {
        assert.isTrue(rules['use-named-parameter']);
    });
});
