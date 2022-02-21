#!/usr/bin/env node

const { version } = require('../package');
const program = require('commander');

const { cloneRules, cloneOtherRules } = require('../lib');

program.version(version, '-v, --version', 'cli version').helpOption('-h, --help', 'show help info');

program
  .command('all')
  .description('all configuration files containing prettier, eslint, stylelint')
  .action(() => {
    cloneRules();
  });

program
  .command('.all')
  .description('.editorconfig / .gitignore / .prettierignore')
  .action(() => {
    cloneOtherRules();
  });

program.parse(process.argv);
