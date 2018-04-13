'use strict';

module.exports = {
    rules: {
        'adjacent-overload-signatures': true,
        align: [
            true,
            'members',
            'parameters',
            'statements'
        ],
        'array-bracket-spacing': false,
        'arrow-return-shorthand': true,
        'binary-expression-operand-order': true,
        'block-spacing': [
            true,
            'always'
        ],
        'callable-types': true,
        'chai-prefer-contains-to-index-of': true,
        'chai-vague-errors': true,
        'class-name': true,
        curly: true,
        'cyclomatic-complexity': [
            true,
            10
        ],
        deprecation: true,
        'function-name': true,
        'import-spacing': true,
        indent: [
            true,
            'spaces',
            4
        ],
        'interface-over-type-literal': true,
        'jsdoc-format': true,
        'jquery-deferred-must-complete': true,
        'label-position': true,
        'max-classes-per-file': [
            true,
            1
        ],
        'max-func-body-length': [
            false,
            30,
            {
                'ignore-parameters-to-function-regex': 'describe|suite'
            }
        ],
        'max-line-length': [
            true,
            150
        ],
        'member-access': true,
        'missing-optional-annotation': true,
        'mocha-avoid-only': true,
        'mocha-no-side-effect-code': true,
        'mocha-unneeded-done': true,
        'new-parens': true,
        'no-any': true,
        'no-arg': true,
        'no-backbone-get-set-outside-model': true,
        'no-banned-terms': true,
        'no-bitwise': true,
        'no-conditional-assignment': true,
        'no-consecutive-blank-lines': true,
        'no-constant-condition': true,
        'no-control-regex': true,
        'no-construct': true,
        'no-debugger': true,
        'no-delete-expression': true,
        'no-disable-auto-sanitization': true,
        'no-document-domain': true,
        'no-document-write': true,
        'no-duplicate-case': true,
        'no-duplicate-imports': true,
        'no-duplicate-parameter-names': true,
        'no-duplicate-super': true,
        'no-duplicate-variable': true,
        'no-empty-interface': true,
        'no-eval': true,
        'no-ex-assign': true,
        'no-exec-script': true,
        'no-extra-boolean-cast': true,
        'no-extra-semi': true,
        'no-floating-promises': true,
        'no-function-constructor-with-string-args': true,
        'no-function-expression': true,
        'no-invalid-this': true,
        'no-invalid-regexp': true,
        'no-irregular-whitespace': true,
        'no-jquery-raw-elements': true,
        'no-missing-visibility-modifiers': true,
        'no-multi-spaces': true,
        'no-multiline-string': false,
        'no-multiple-var-decl': true,
        'no-octal-literal': true,
        'no-reference': true,
        'no-regex-spaces': true,
        'no-reserved-keywords': true,
        'no-sparse-arrays': true,
        'no-single-line-block-comment': true,
        'no-string-literal': true,
        'no-string-based-set-immediate': true,
        'no-string-based-set-interval': true,
        'no-string-based-set-timeout': true,
        'no-string-throw': true,
        'no-switch-case-fall-through': true,
        'no-trailing-whitespace': true,
        'no-typeof-undefined': true,
        'no-unnecessary-bind': true,
        'no-unnecessary-callback-wrapper': true,
        'no-unnecessary-field-initialization': true,
        'no-unnecessary-initializer': true,
        'no-unnecessary-local-variable': true,
        'no-unnecessary-override': true,
        'no-unnecessary-semicolons': true,
        'no-unsafe-finally': true,
        'no-unused-expression': true,
        'no-unused-variable': true,
        'no-var-keyword': true,
        'no-with-statement': true,
        'non-literal-require': true,
        'object-curly-spacing': [true,
            'always'
        ],
        'object-literal-key-quotes': [
            false,
            'as-needed'
        ],
        'object-literal-sort-keys': false,
        'one-line': [
            true,
            'check-open-brace',
            'check-catch',
            'check-else',
            'check-whitespace'
        ],
        'one-variable-per-declaration': [ true ],
        'possible-timing-attack': true,
        'prefer-array-literal': true,
        'prefer-conditional-expression': true,
        'prefer-const': true,
        'prefer-type-cast': true,
        'promise-must-complete': true,
        quotemark: [
            true,
            'single'
        ],
        'return-undefined': true,
        semicolon: [
            true,
            'ignore-bound-class-methods' ],
        'trailing-comma': [
            true,
            {
                'singleline': 'never',
                'multiline': 'never'
            }
        ],
        'triple-equals': [
            true,
            'allow-null-check'
        ],
        typedef: [
            true,
            'parameter',
            'property-declaration',
            'member-variable-declaration'
        ],
        'variable-name': true,
        'underscore-consistent-invocation': true,
        'unified-signatures': true,
        'use-isnan': true,
        'use-named-parameter': true,
        'valid-typeof': true,
        whitespace: [
            true,
            'check-branch',
            'check-decl',
            'check-operator',
            'check-preblock',
            'check-separator',
            'check-type'
        ]
    }
};