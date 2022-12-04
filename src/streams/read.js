import { createReadStream } from 'node:fs';
import getPath from './getPath.js';

const read = async () => {
  const path = getPath('files', 'fileToRead.txt');
  const readStream = createReadStream(path);
  readStream.on('data', (chank) => {
    process.stdout.write(chank);
  });
};

await read();
