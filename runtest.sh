#!/usr/bin/env bash
set -e

export NODE_ENV=test
export multi='mocha-osx-reporter=- dot=-'

# TODO: remove --exit once all apps shutdown tests gracefully
MOCHA_ARGS="--exit --require=babel-register"
MOCHA_CMD="./node_modules/mocha/bin/mocha $MOCHA_ARGS"
# TODO: babel-register sourcemaps no longer work when in this scenario:
ISTANBUL_CMD="babel-node ./node_modules/istanbul/lib/cli cover --dir=.coverage ./node_modules/mocha/bin/_mocha -- $MOCHA_ARGS"

case "$1" in
  --watch) $MOCHA_CMD --watch --reporter=mocha-multi "${@: -1}"
    ;;
  --coverage) $ISTANBUL_CMD "${@: -1}"
    ;;
  *) $MOCHA_CMD "${@: -1}"
esac
