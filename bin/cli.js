#!/usr/bin/env node

const { version } = require('../package');
const program = require('commander');

const { cloneRules } = require('../lib');

program.version(version, '-v, --version', 'cli version').helpOption('-h, --help', 'show help info');

program
  .command('all')
  .description('all configuration files containing prettier, eslint, stylelint')
  .action(() => {
    cloneRules();
  });

program.parse(process.argv);
