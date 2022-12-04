import { readFile } from 'node:fs/promises';
import getPath from './getPath.js';
import isAvailable from './isAvailable.js';

const read = async (path, name) => {
  const fullPath = getPath(path, name);
  const errorMsg = 'FS operation failed';
  if (await isAvailable(fullPath)) {
    const content = await readFile(fullPath, 'utf-8');
    return content;
  } else {
    console.error(errorMsg);
  }
};

export default read;
