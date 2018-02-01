#!/usr/bin/env bash
set -e

export NODE_ENV=test
export BLUEBIRD_DEBUG=1
export multi='mocha-osx-reporter=- dot=-'

MOCHA_ARGS="--require=babel-register"
MOCHA_CMD="./node_modules/mocha/bin/mocha $MOCHA_ARGS"
ISTANBUL_CMD="babel-node ./node_modules/istanbul/lib/cli cover --dir=.coverage ./node_modules/mocha/bin/_mocha -- $MOCHA_ARGS"

case "$1" in
  --watch) $MOCHA_CMD --watch --reporter=mocha-multi "${@: -1}"
    ;;
  --coverage) $ISTANBUL_CMD
    ;;
  *) $MOCHA_CMD "${@: -1}"
esac