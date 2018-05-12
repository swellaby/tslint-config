'use strict';

const utils = require('./utils');

module.exports = {
    rules: {
        'adjacent-overload-signatures': true,
        align: [
            true,
            'arguments',
            'elements',
            'members',
            'parameters',
            'statements'
        ],
        'arrow-return-shorthand': true,
        'binary-expression-operand-order': true,
        'callable-types': true,
        'class-name': true,
        curly: true,
        'cyclomatic-complexity': [
            true,
            10
        ],
        deprecation: true,
        'import-spacing': true,
        indent: [
            true,
            'spaces'
        ],
        'interface-name': [
            true,
            'always-prefix'
        ],
        'interface-over-type-literal': true,
        'jsdoc-format': true,
        'label-position': true,
        'max-classes-per-file': [
            true,
            1
        ],
        'max-line-length': [
            true,
            180
        ],
        'member-access': true,
        'new-parens': true,
        'no-any': true,
        'no-arg': true,
        'no-bitwise': true,
        'no-conditional-assignment': true,
        'no-consecutive-blank-lines': true,
        'no-construct': true,
        'no-debugger': true,
        'no-duplicate-imports': true,
        'no-duplicate-super': true,
        'no-duplicate-variable': true,
        'no-empty': true,
        'no-eval': true,
        'no-floating-promises': true,
        'no-invalid-this': true,
        'no-reference': true,
        'no-string-literal': true,
        'no-string-throw': true,
        'no-switch-case-fall-through': true,
        'no-trailing-whitespace': true,
        'no-unnecessary-callback-wrapper': true,
        'no-unnecessary-initializer': true,
        'no-unsafe-finally': true,
        'no-unused-expression': true,
        'no-unused-variable': true,
        'no-var-keyword': true,
        'object-literal-key-quotes': [
            false,
            utils.ruleSettings.asNeeded
        ],
        'object-literal-sort-keys': false,
        'one-line': [
            true,
            'check-catch',
            'check-else',
            'check-finally',
            'check-open-brace',
            'check-whitespace'
        ],
        'one-variable-per-declaration': [
            true,
            'ignore-for-loop'
        ],
        'prefer-conditional-expression': true,
        'prefer-const': true,
        quotemark: [
            true,
            'single'
        ],
        'return-undefined': true,
        semicolon: [
            true,
            'ignore-bound-class-methods'
        ],
        'trailing-comma': [
            true,
            {
                singleline: utils.ruleSettings.never,
                multiline: utils.ruleSettings.never
            }
        ],
        'triple-equals': [
            true,
            'allow-null-check',
            'allow-undefined-check'
        ],
        typedef: [
            true,
            'parameter',
            'property-declaration',
            'member-variable-declaration'
        ],
        'variable-name': [
            true,
            'check-format',
            'ban-keywords',
            'allow-leading-underscore'
        ],
        'unified-signatures': true,
        'use-isnan': true,
        whitespace: [
            true,
            'check-branch',
            'check-decl',
            'check-module',
            'check-operator',
            'check-preblock',
            'check-separator',
            'check-type'
        ]
    }
};