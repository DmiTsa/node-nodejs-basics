import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { promisify } from 'node:util';
import getPath from './getPath.js';

const decompress = async () => {
  const inputPath = getPath('files', 'archive.gz');
  const outputPath = getPath('files', 'decompressed.txt');
  const errorMsg = 'Operation error: ';
  const pipe = promisify(pipeline);

  async function zipper(input, output) {
    const gzip = createGunzip();
    const source = createReadStream(input);
    const destination = createWriteStream(output);
    await pipe(source, gzip, destination);
  }

  await zipper(inputPath, outputPath).catch((err) => {
    console.error(errorMsg, err);
  });
};

await decompress();
