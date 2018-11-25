'use strict';

const path = require('path');
const shell = require('shelljs');

const normalizeDirectoryPaths = originalPath => originalPath.replace(/\\/g, '/');
const testContextRootDir = 'fixtures';
const baseTestContextDir = 'base';
const testContextRootDirPath = path.join(path.resolve('./'), 'test', 'functional', testContextRootDir);
const baseTestContextDirPath = path.join(testContextRootDirPath, baseTestContextDir);


const buildTSLintCommand = (args, options) => {
    let command = 'npm run tslint -- ';
    if (options) {
        command = `${command} ${options}`;
    }

    return `${command} ${args}`;
};

const runTSLint = (args, options, isSilent = true) => {
    const command = buildTSLintCommand(args, options);
    return shell.exec(command, { silent: isSilent, cwd: testContextRootDirPath });
};

const runTSLintWithCallback = (args, options, isSilent = true, callback) => {
    const command = buildTSLintCommand(args, options);
    return shell.exec(command, { silent: isSilent, cwd: testContextRootDirPath }, callback);
};

module.exports = {
    successfulReturnCode: 0,
    testContextRootDir,
    libTestContextRelativeDir: `${testContextRootDir}/${baseTestContextDir}`,
    testContextRootDirPath,
    baseTestContextDirPath,
    normalizeDirectoryPaths,
    runTSLint,
    runTSLintWithCallback
};
