# tslint-microsoft-contrib Rule Configuration
This [tslint][tslint-url] configuration module defines the below configuration for the [tslint-microsoft-contrib TSLint rules][tslint-microsoft-contrib-url]:

```json
{
    "chai-prefer-contains-to-index-of": true,
    "chai-vague-errors": true,
    "function-name": true,
    "jquery-deferred-must-complete": true,
    "max-func-body-length": [
        true,
        30,
        {
            "ignore-parameters-to-function-regex": "describe|suite"
        }
    ],
    "mocha-avoid-only": true,
    "mocha-no-side-effect-code": true,
    "mocha-unneeded-done": true,
    "no-banned-terms": true,
    "no-constant-condition": true,
    "no-control-regex": true,
    "no-delete-expression": true,
    "no-disable-auto-sanitization": true,
    "no-document-domain": true,
    "no-document-write": true,
    "no-duplicate-case": true,
    "no-duplicate-parameter-names": true,
    "no-empty-interface": true,
    "no-exec-script": true,
    "no-function-expression": true,
    "no-invalid-regexp": true,
    "no-jquery-raw-elements": true,
    "no-missing-visibility-modifiers": true,
    "no-multiline-string": false,
    "no-multiple-var-decl": true,
    "no-octal-literal": true,
    "no-regex-spaces": true,
    "no-single-line-block-comment": true,
    "no-string-based-set-immediate": true,
    "no-string-based-set-interval": true,
    "no-string-based-set-timeout": true,
    "no-typeof-undefined": true,
    "no-unnecessary-field-initialization": true,
    "no-unnecessary-local-variable": true,
    "no-unnecessary-override": true,
    "no-unnecessary-semicolons": true,
    "no-with-statement": true,
    "non-literal-require": true,
    "possible-timing-attack": true,
    "prefer-array-literal": true,
    "prefer-type-cast": true,
    "promise-must-complete": true,
    "underscore-consistent-invocation": true,
    "use-named-parameter": true,
}
```
[Back to Top](#tslint-microsoft-contrib-rule-configuration)

[tslint-url]: https://palantir.github.io/tslint/
[tslint-microsoft-contrib-url]: https://github.com/Microsoft/tslint-microsoft-contrib#supported-rules
