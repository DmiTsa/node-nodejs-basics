import { rm } from 'node:fs/promises';
import getPath from './getPath.js';
import isAvailable from './isAvailable.js';

const remove = async () => {
  const fullPath = getPath('/files', 'fileToRemove.txt');
  const errorMsg = 'FS operation failed';

  if (await isAvailable(fullPath)) {
    rm(fullPath);
    console.log('file deleted!');
  } else {
    console.error(errorMsg);
  }
};

await remove();
