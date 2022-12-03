import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';
import getPath from './getPath.js';

const performCalculations = async () => {
  const nthCpus = cpus().length;
  const n = 10;
  const path = getPath('', 'worker.js');

  async function runWorker(wd) {
    const worker = new Worker(path, { workerData: wd });

    return new Promise((resolve, reject) => {
      worker.on('message', (message) =>
        resolve({ status: 'resolved', value: message })
      );
      worker.on('error', () => reject({ status: 'error', value: 0 }));
    });
  }

  const results = [];
  for (let i = 0; i < nthCpus; i++) {
    results[i] = await runWorker(n + i);
  }

  console.log(results);
};

await performCalculations();
