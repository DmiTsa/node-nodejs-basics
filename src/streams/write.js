import { createWriteStream } from 'node:fs';
import getPath from './getPath.js';

const write = async () => {
  const path = getPath('files', 'fileToWrite.txt');
  const writeStream = createWriteStream(path);

  process.stdin.on('data', (ch) => {
    writeStream.write(ch);
  });
};

await write();
