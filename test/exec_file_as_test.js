/* eslint-env goodeggs/server-side-test */
import '../src';

import cp from 'child_process';
import path from 'path';

describe('exec_file_as_test', function () {
  it('allows you to run a js file and have it interpereted as a test', function (done) {
    this.timeout(5000);

    const file = path.join(__dirname, 'simpletest.js');
    const proc = cp.spawn('babel-node', [file]);
    let seenMagicalText = false;
    proc.stderr.pipe(process.stderr);
    proc.stdout.on('data', function (d) {
      if (d.toString('utf8').match(/does not test anything in particular/))
        seenMagicalText = true;
    });
    proc.on('close', function (code) {
      if (code !== 0) return done(new Error(`\`babel-node simpletest.js\` exited with code ${code}.`));
      if (!seenMagicalText) return done(new Error('`babel-node simpletest.js\` did not run in a mocha context.'));
      return done();
    });
  });
});
