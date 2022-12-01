import { readdir } from 'node:fs/promises';
import getPath from './getPath.js';
import isAvailable from './isAvailable.js';

const list = async () => {
  const fullPath = getPath('/files');
  const errorMsg = 'FS operation failed';

  if (await isAvailable(fullPath)) {
    const files = await readdir(fullPath);
    console.log(`File list (${fullPath}) :`);
    files.forEach((file) => console.log(file));
  } else {
    console.error(errorMsg);
  }
};

await list();
