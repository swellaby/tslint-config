'use strict';

const assert = require('chai').assert;
const base = require('../lib/base');
const rules = base.rules;

suite('base Suite:', () => {
    test('Should not extend any other configs', () => {
        assert.isUndefined(base.extends);
    });

    test('Should not include and ruleDirectories', () => {
        assert.isUndefined(base.rulesDirectory);
    });

    test('Should enable adjacent-overload-signatures rule', () => {
        assert.isTrue(rules['adjacent-overload-signatures']);
    });

    test('Should correctly configure align rule', () => {
        const alignRule = rules.align;
        assert.deepEqual(alignRule.length, 6);
        assert.isTrue(alignRule[0]);
        assert.isTrue(alignRule.includes('arguments'));
        assert.isTrue(alignRule.includes('elements'));
        assert.isTrue(alignRule.includes('members'));
        assert.isTrue(alignRule.includes('parameters'));
        assert.isTrue(alignRule.includes('statements'));
    });

    test('Should enable arrow-return-shorthand rule', () => {
        assert.isTrue(rules['arrow-return-shorthand']);
    });

    test('Should enable binary-expression-operand-order rule', () => {
        assert.isTrue(rules['binary-expression-operand-order']);
    });

    test('Should enable callable-types rule', () => {
        assert.isTrue(rules['callable-types']);
    });

    test('Should enable class-name rule', () => {
        assert.isTrue(rules['class-name']);
    });

    test('Should enable curly rule', () => {
        assert.isTrue(rules.curly);
    });

    test('Should correctly configure cyclomatic-complexity rule', () => {
        const complexityRule = rules['cyclomatic-complexity'];
        assert.deepEqual(complexityRule.length, 2);
        assert.isTrue(complexityRule[0]);
        assert.deepEqual(complexityRule[1], 10);
    });

    test('Should enable deprecation rule', () => {
        assert.isTrue(rules.deprecation);
    });

    test('Should enable import-spacing rule', () => {
        assert.isTrue(rules['import-spacing']);
    });

    test('Should correctly configure indent rule', () => {
        const indentRule = rules.indent;
        assert.deepEqual(indentRule.length, 2);
        assert.isTrue(indentRule[0]);
        assert.deepEqual(indentRule[1], 'spaces');
    });

    test('Should correctly configure interface-name rule', () => {
        const interfaceNameRule = rules['interface-name'];
        assert.deepEqual(interfaceNameRule.length, 2);
        assert.isTrue(interfaceNameRule[0]);
        assert.deepEqual(interfaceNameRule[1], 'always-prefix');
    });

    test('Should enable interface-over-type-literal rule', () => {
        assert.isTrue(rules['interface-over-type-literal']);
    });

    test('Should enable jsdoc-format rule', () => {
        assert.isTrue(rules['jsdoc-format']);
    });

    test('Should enable label-position rule', () => {
        assert.isTrue(rules['label-position']);
    });

    test('Should correctly configure max-classes-per-file rule', () => {
        const maxClassesRule = rules['max-classes-per-file'];
        assert.deepEqual(maxClassesRule.length, 2);
        assert.isTrue(maxClassesRule[0]);
        assert.deepEqual(maxClassesRule[1], 1);
    });

    test('Should correctly max-line-length rule', () => {
        const maxLengthRule = rules['max-line-length'];
        assert.deepEqual(maxLengthRule.length, 2);
        assert.isTrue(maxLengthRule[0]);
        assert.deepEqual(maxLengthRule[1], 180);
    });

    test('Should enable member-access rule', () => {
        assert.isTrue(rules['member-access']);
    });

    test('Should enable new-parens rule', () => {
        assert.isTrue(rules['new-parens']);
    });

    test('Should enable no-any rule', () => {
        assert.isTrue(rules['no-any']);
    });

    test('Should enable no-arg rule', () => {
        assert.isTrue(rules['no-arg']);
    });

    test('Should enable no-bitwise rule', () => {
        assert.isTrue(rules['no-bitwise']);
    });

    test('Should enable no-conditional-assignment rule', () => {
        assert.isTrue(rules['no-conditional-assignment']);
    });

    test('Should enable no-consecutive-blank-lines rule', () => {
        assert.isTrue(rules['no-consecutive-blank-lines']);
    });

    test('Should enable no-construct rule', () => {
        assert.isTrue(rules['no-construct']);
    });

    test('Should enable no-debugger rule', () => {
        assert.isTrue(rules['no-debugger']);
    });

    test('Should enable no-duplicate-imports rule', () => {
        assert.isTrue(rules['no-duplicate-imports']);
    });

    test('Should enable no-duplicate-super rule', () => {
        assert.isTrue(rules['no-duplicate-super']);
    });

    test('Should enable no-duplicate-variable rule', () => {
        assert.isTrue(rules['no-duplicate-variable']);
    });

    test('Should enable no-empty rule', () => {
        assert.isTrue(rules['no-empty']);
    });

    test('Should enable no-eval rule', () => {
        assert.isTrue(rules['no-eval']);
    });

    test('Should enable no-floating-promises rule', () => {
        assert.isTrue(rules['no-floating-promises']);
    });

    test('Should enable no-invalid-this rule', () => {
        assert.isTrue(rules['no-invalid-this']);
    });

    test('Should enable no-reference rule', () => {
        assert.isTrue(rules['no-reference']);
    });

    test('Should enable no-string-literal rule', () => {
        assert.isTrue(rules['no-string-literal']);
    });

    test('Should enable no-string-throw rule', () => {
        assert.isTrue(rules['no-string-throw']);
    });

    test('Should enable no-switch-case-fall-through rule', () => {
        assert.isTrue(rules['no-switch-case-fall-through']);
    });

    test('Should enable no-trailing-whitespace rule', () => {
        assert.isTrue(rules['no-trailing-whitespace']);
    });

    test('Should enable no-unnecessary-callback-wrapper rule', () => {
        assert.isTrue(rules['no-unnecessary-callback-wrapper']);
    });

    test('Should enable no-unnecessary-initializer rule', () => {
        assert.isTrue(rules['no-unnecessary-initializer']);
    });
    test('Should enable no-unsafe-finally rule', () => {
        assert.isTrue(rules['no-unsafe-finally']);
    });

    test('Should enable no-unused-expression rule', () => {
        assert.isTrue(rules['no-unused-expression']);
    });

    test('Should enable no-unused-variable rule', () => {
        assert.isTrue(rules['no-unused-variable']);
    });

    test('Should enable no-var-keyword rule', () => {
        assert.isTrue(rules['no-var-keyword']);
    });

    test('Should correctly configure object-literal-key-quotes rule', () => {
        const keyQuotesRule = rules['object-literal-key-quotes'];
        assert.deepEqual(keyQuotesRule.length, 2);
        assert.isFalse(keyQuotesRule[0]);
        assert.deepEqual(keyQuotesRule[1], 'as-needed');
    });

    test('Should disable object-literal-sort-keys rule', () => {
        assert.isFalse(rules['object-literal-sort-keys']);
    });

    test('Should correctly configure one-line rule', () => {
        const oneLineRule = rules['one-line'];
        assert.deepEqual(oneLineRule.length, 6);
        assert.isTrue(oneLineRule[0]);
        assert.isTrue(oneLineRule.includes('check-catch'));
        assert.isTrue(oneLineRule.includes('check-else'));
        assert.isTrue(oneLineRule.includes('check-finally'));
        assert.isTrue(oneLineRule.includes('check-open-brace'));
        assert.isTrue(oneLineRule.includes('check-whitespace'));
    });

    test('Should correctly configure one-variable-per-declaration rule', () => {
        const oneVariableRule = rules['one-variable-per-declaration'];
        assert.deepEqual(oneVariableRule.length, 2);
        assert.isTrue(oneVariableRule[0]);
        assert.isTrue(oneVariableRule.includes('ignore-for-loop'));
    });

    test('Should enable prefer-conditional-expression rule', () => {
        assert.isTrue(rules['prefer-conditional-expression']);
    });

    test('Should enable prefer-const rule', () => {
        assert.isTrue(rules['prefer-const']);
    });

    test('Should correctly configure quotemark rule', () => {
        const quotemarkRule = rules.quotemark;
        assert.deepEqual(quotemarkRule.length, 2);
        assert.isTrue(quotemarkRule[0]);
        assert.deepEqual(quotemarkRule[1], 'single');
    });

    test('Should enable return-undefined rule', () => {
        assert.isTrue(rules['return-undefined']);
    });

    test('Should correctly configure semicolon rule', () => {
        const semicolonRule = rules.semicolon;
        assert.deepEqual(semicolonRule.length, 2);
        assert.isTrue(semicolonRule[0]);
        assert.isTrue(semicolonRule.includes('ignore-bound-class-methods'));
    });

    test('Should correctly configure trailing-comma rule', () => {
        const trailingCommaRule = rules['trailing-comma'];
        assert.deepEqual(trailingCommaRule.length, 2);
        assert.isTrue(trailingCommaRule[0]);
        assert.deepEqual(trailingCommaRule[1].singleline, 'never');
        assert.deepEqual(trailingCommaRule[1].multiline, 'never');
    });

    test('Should correctly configure triple-equals rule', () => {
        const tripleEqRule = rules['triple-equals'];
        assert.deepEqual(tripleEqRule.length, 3);
        assert.isTrue(tripleEqRule[0]);
        assert.isTrue(tripleEqRule.includes('allow-null-check'));
        assert.isTrue(tripleEqRule.includes('allow-undefined-check'));
    });

    test('Should correctly configure typedef rule', () => {
        const typedefRule = rules.typedef;
        assert.deepEqual(typedefRule.length, 4);
        assert.isTrue(typedefRule[0]);
        assert.isTrue(typedefRule.includes('parameter'));
        assert.isTrue(typedefRule.includes('property-declaration'));
        assert.isTrue(typedefRule.includes('member-variable-declaration'));
    });

    test('Should correctly configure variable-name rule', () => {
        const varNameRule = rules['variable-name'];
        assert.deepEqual(varNameRule.length, 4);
        assert.isTrue(varNameRule[0]);
        assert.isTrue(varNameRule.includes('check-format'));
        assert.isTrue(varNameRule.includes('ban-keywords'));
        assert.isTrue(varNameRule.includes('allow-leading-underscore'));
    });

    test('Should enable unified-signatures rule', () => {
        assert.isTrue(rules['unified-signatures']);
    });

    test('Should enable use-isnan rule', () => {
        assert.isTrue(rules['use-isnan']);
    });

    test('Should correctly configure whitespace rule', () => {
        const whitespaceRule = rules.whitespace;
        assert.deepEqual(whitespaceRule.length, 8);
        assert.isTrue(whitespaceRule[0]);
        assert.isTrue(whitespaceRule.includes('check-branch'));
        assert.isTrue(whitespaceRule.includes('check-decl'));
        assert.isTrue(whitespaceRule.includes('check-module'));
        assert.isTrue(whitespaceRule.includes('check-operator'));
        assert.isTrue(whitespaceRule.includes('check-preblock'));
        assert.isTrue(whitespaceRule.includes('check-separator'));
        assert.isTrue(whitespaceRule.includes('check-type'));
    });
});