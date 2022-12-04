import { sep } from 'path';
import { dirname } from 'node:path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'node:http';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import './files/c.js';

const random = Math.random();
const require = createRequire(import.meta.url);
const pathFile = fileURLToPath(import.meta.url);
const pathRun = dirname(pathFile);

let unknownObject;

if (random > 0.5) {
  unknownObject = require('./files/a.json');
} else {
  unknownObject = require('./files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${pathFile}`);
console.log(`Path to current directory is ${pathRun}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3001;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
