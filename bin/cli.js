#!/usr/bin/env node --experimental-modules

import fs from 'fs';
import program from 'commander';

import { cloneRules } from '../lib/index.js';

const { version } = JSON.parse(fs.readFileSync('package.json', 'utf8'));

program.version(version, '-v, --version', 'cli version').helpOption('-h, --help', 'show help info');

program
  .command('all')
  .description('all configuration files containing prettier, eslint, stylelint')
  .action(() => {
    cloneRules();
  });

program.parse(process.argv);
