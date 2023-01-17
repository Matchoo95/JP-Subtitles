#!/usr/bin/env node

import { statSync } from 'fs';
import { readdir, writeFile } from 'fs/promises'
import { join } from 'path';

;(async function () {
  let dirs = await readdir('..')
  dirs = dirs.filter((d) => {
    return statSync(join('..', d)).isDirectory() && d !== 'docs' && d !== '.git'
  })

  writeFile('files.json', JSON.stringify(dirs))
})()
