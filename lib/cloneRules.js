import path from 'path';
import chalk from 'chalk';
import logSymbols from 'log-symbols';
import fs from 'fs-extra';
import memFs from 'mem-fs';
import memFsEditor from 'mem-fs-editor';

const store = memFs.create();
const memFsEditorFs = memFsEditor.create(store);

const fromPath = path.join(process.cwd(), 'src');
const toPath = process.cwd();

const cloneRules = async (rules) => {
  const files = await fs.readdir(fromPath);
  const filesArr = files.filter((item) => {
    return item !== 'index.js';
  });

  filesArr.forEach((item) => {
    const fileContent = memFsEditorFs.read(path.join(fromPath, item), ['defaults']);
    memFsEditorFs.write(path.join(toPath, `.${item}`), fileContent);
  });

  memFsEditorFs.commit(() => {
    console.log();
    console.log(logSymbols.success, `已生成`);
    console.log();
    console.log(chalk.grey(`文件目录: ${toPath}`));
  });
};

export default cloneRules;
