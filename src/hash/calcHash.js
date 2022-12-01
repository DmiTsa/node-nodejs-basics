import read from './read.js';
import getPath from './getPath.js';
import isAvailable from './isAvailable.js';

const calculateHash = async () => {
  const { createHash } = await import('node:crypto');
  const path = '/files';
  const file = 'fileToCalculateHashFor.txt';
  const fullPath = getPath(path, file);
  const errorMsg = 'FS operation failed';

  if (await isAvailable(fullPath)) {
    const hash = createHash('sha256');
    const data = await read(path, file);

    hash.update(data);
    console.log('Hash of file: ' + file);

    console.log(hash.digest('hex'));
  } else {
    console.error(errorMsg);
  }
};

await calculateHash();
