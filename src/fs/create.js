import { appendFile } from 'node:fs/promises';
import getPath from './getPath.js';
import isAvailable from './isAvailable.js';

const create = async () => {
  const fullPath = getPath('/files', 'fresh.txt');
  const data = 'I am fresh and young';
  const errorMsg = 'FS operation failed';

  if (await isAvailable(fullPath)) {
    console.error(errorMsg);
  } else {
    appendFile(fullPath, data);
    console.log('file fresh.txt created!');
    console.log(`Path: ${fullPath}`);
  }
};

await create();
