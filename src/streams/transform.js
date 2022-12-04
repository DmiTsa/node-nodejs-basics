import { Transform } from 'node:stream';
// import { createWriteStream } from 'node:fs';
// import getPath from './getPath.js';

const transform = async () => {
  //   const path = getPath('files', 'fileToWrite.txt');
  //   const writeStream = createWriteStream(path);

  const reverse = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split(' ').reverse().join(' '));
    },
  });

  console.log('input text here:');
  process.stdin.pipe(reverse).pipe(process.stdout);
  //   process.stdin.pipe(reverse).pipe(writeStream);
};
await transform();

// transform.js — реализовать функцию, которая считывает данные из process.stdin, переворачивает текст с помощью Transform Stream, а затем записывает его в process.stdout.
