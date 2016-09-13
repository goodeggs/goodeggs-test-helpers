if (!global.describe) {
  function errExit (message, code = 1) { // eslint-disable-line no-inner-declarations
    process.stderr.write(`${message}\n`);
    process.exit(code);
  }

  const cp = require('child_process'); // eslint-disable-line global-require
  const fs = require('fs'); // eslint-disable-line global-require
  const path = require('path'); // eslint-disable-line global-require

  const script = process.argv[1];
  const watch = (process.argv[2] === '--watch' || process.argv[2] === '-w');

  console.log({script, watch});

  // find the nearest package.json
  let pkgPath = process.cwd();
  let pkgJsonFile = null;
  let pkgJson = null;
  while (pkgJson === null && path.dirname(pkgPath) !== pkgPath) {
    try {
      pkgJsonFile = path.join(pkgPath, 'package.json');
      pkgJson = JSON.parse(fs.readFileSync(pkgJsonFile, {encoding: 'utf8'})); // eslint-disable-line no-sync
    } catch (e) {
      pkgPath = path.dirname(pkgPath);
    }
  }
  console.log({pkgJsonFile, pkgPath});
  if (pkgJson === null) errExit('Could not find a package.json in the current directory or any parent directories.');
  if (pkgJson.scripts === undefined) errExit(`${pkgJsonFile} does not have a scripts section; cannot run test.`);

  // figure out what command to run
  const scriptName = watch ? 'test:watch:single' : 'test:single';
  if (pkgJson.scripts[scriptName] === undefined) errExit(`${pkgJsonFile} does not have a '${scriptName}' script; cannot run test.`);
  let command = pkgJson.scripts[scriptName].replace('__TESTFILE__', script);
  console.log({scriptName, command});

  // hack to support nsrun (https://github.com/demands/nsrun)
  try {
    // check to see if nsrun exists in $PATH:
    cp.execSync('nsrun'); // eslint-disable-line no-sync
    command = command.replace(/npm run/g, 'nsrun');
  } catch (e) { /* noop */ }

  console.log({command});

  const env = Object.assign({}, process.env, {
    PATH: `${path.join(pkgPath, 'node_modules', '.bin')}:${process.env.PATH}`,
  });

  try {
    console.log('go go go');
    cp.execSync(command, {env, stdio: 'inherit'}); // eslint-disable-line no-sync
  } catch (e) {
    process.exit(e.status);
  }
  process.exit(0);
}
