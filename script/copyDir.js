import { spawn } from 'child_process';

const copyDir = (src, dist) => {
  spawn('cp', ['-r', src, dist]);
};

copyDir('./packages', './docs');
