import { mkdir, readdir, copyFile } from 'node:fs/promises';
import getPath from './getPath.js';
import isAvailable from './isAvailable.js';

const copy = async () => {
  const fullPathSrc = getPath('/files/');
  const fullPathDest = getPath('/files_copy/');

  const errorMsg = 'FS operation failed';

  if (await isAvailable(fullPathSrc)) {
    if (!(await isAvailable(fullPathDest))) {
      await mkdir(fullPathDest);

      const fileList = await readdir(fullPathSrc);
      fileList.forEach((file) => {
        copyFile(fullPathSrc + file, fullPathDest + file);
        console.log('files copied!');
      });
    } else {
      console.error(errorMsg + '. Destination folder already exsist');
    }
  } else {
    console.error(errorMsg + '. Source folder not found');
  }
};

await copy();
