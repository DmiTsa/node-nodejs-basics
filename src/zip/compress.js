import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { promisify } from 'node:util';
import getPath from './getPath.js';

const compress = async () => {
  const inputPath = getPath('files', 'fileToCompress.txt');
  const outputPath = getPath('files', 'archive.gz');
  const errorMsg = 'Operation error: ';
  const pipe = promisify(pipeline);

  async function zipper(input, output) {
    const gzip = createGzip();
    const source = createReadStream(input);
    const destination = createWriteStream(output);
    await pipe(source, gzip, destination);
  }

  await zipper(inputPath, outputPath).catch((err) => {
    console.error(errorMsg, err);
  });
};

await compress();
