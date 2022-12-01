import { readFile } from 'node:fs/promises';
import getPath from './getPath.js';
import isAvailable from './isAvailable.js';

const read = async () => {
  const fullPath = getPath('/files', 'fileToRead.txt');
  const errorMsg = 'FS operation failed';
  if (await isAvailable(fullPath)) {
    const content = await readFile(fullPath, 'utf-8');
    console.log(content);
  } else {
    console.error(errorMsg);
  }
};

await read();
