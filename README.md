# tslint-config
Module that contains our [tslint][tslint-url] configurations.  

[![npmjs Version Badge][npmjs-version-badge]][npmjs-pkg-url]
[![npmjs Downloads Badge][npmjs-downloads-badge]][npmjs-pkg-url]
[![Circle CI Badge][circle-ci-badge]][circle-ci-url]
[![license Badge][license-badge]][license-url]  

## Installation
Install the tslint-config module as a dev dependency:
```sh
npm i @swellaby/tslint-config --save-dev
```

## Usage
Add an `extends` key to your [tslint config file][tslint-config-url] and specify the value of the configuration you want to use:

For example, to use our default tslint configuration add the following to your `tslint.json` file:
```json
{
    ...
    "extends": "@swellaby/tslint-config",
    ...
}
``` 

You can optionally use any of our other tslint configurations by adding the desired configuration to the end of the extends path. For example to use our base configuration instead of the default:
```json
{
    ...
    "extends": "@swellaby/tslint-config/base",
    ...
}
``` 

## Configuration
Our default module configuration includes our rule config from the base TSLint rule set, as well as rule configurations for the [tslint-microsoft-contrib ruleset][tslint-msft-contrib-rules-url] and the [tslint-eslint ruleset][tslint-eslint-rules-url]. You can view our rule configurations for the respective rulesets at the below links:

* [Base TSLint Rule Configuration][tslint-base-doc]
* [TSLint Microsoft Contrib Rule Configuration][tslint-eslint-doc]
* [TSLint ESLint Rule Configuration][tslint-msft-contrib-doc]

## Contributing
See our [Contributing Guidelines][contributing-doc] for more information about contributing, building, etc.

## License
MIT - see license details [here][license-url]

[tslint-url]: https://palantir.github.io/tslint/
[tslint-config-url]: https://palantir.github.io/tslint/usage/configuration/
[npmjs-version-badge]: https://img.shields.io/npm/v/@swellaby/tslint-config.svg
[npmjs-pkg-url]: https://www.npmjs.com/package/@swellaby/tslint-config
[npmjs-downloads-badge]: https://img.shields.io/npm/dt/@swellaby/tslint-config.svg
[license-url]: https://github.com/swellaby/tslint-config/blob/master/LICENSE
[license-badge]: https://img.shields.io/github/license/swellaby/tslint-config.svg
[circle-ci-badge]: https://circleci.com/gh/swellaby/tslint-config.svg?style=shield
[circle-ci-url]: https://circleci.com/gh/swellaby/tslint-config
[tslint-eslint-rules-url]: https://www.npmjs.com/package/tslint-eslint-rules
[tslint-msft-contrib-rules-url]: https://github.com/Microsoft/tslint-microsoft-contrib#supported-rules
[tslint-base-doc]: https://github.com/swellaby/tslint-config/blob/master/docs/TSLINT_BASE_RULES.md
[tslint-eslint-doc]: https://github.com/swellaby/tslint-config/blob/master/docs/TSLINT_ESLINT_RULES.md
[tslint-msft-contrib-doc]: https://github.com/swellaby/tslint-config/blob/master/docs/TSLINT_MICROSOFT_CONTRIB_RULES.md
[contributing-doc]: https://github.com/swellaby/tslint-config/blob/master/docs/CONTRIBUTING.md