import { rename } from 'node:fs/promises';
import getPath from './getPath.js';
import isAvailable from './isAvailable.js';

const renameFile = async () => {
  const fullPathWrong = getPath('/files', 'wrongFilename.txt');
  const fullPathProper = getPath('/files', 'properFilename.md');
  const errorMsg = 'FS operation failed';

  if (await isAvailable(fullPathProper)) {
    console.error(errorMsg);
  } else {
    rename(fullPathWrong, fullPathProper);
    console.log('file renamed!');
    console.log(`New path: ${fullPathProper}`);
  }
};

await renameFile();
