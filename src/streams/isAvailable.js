import { access, constants } from 'node:fs/promises';

const isAvailable = async (path = '') => {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
};

export default isAvailable;
