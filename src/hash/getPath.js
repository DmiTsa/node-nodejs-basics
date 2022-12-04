import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const getPath = (path = '', file = '') => {
  const pathRun = dirname(fileURLToPath(import.meta.url));

  return join(pathRun, path, file);
};

export default getPath;
