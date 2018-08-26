#!/usr/bin/env bash
set -e

export NODE_ENV=test
export multi='mocha-osx-reporter=- dot=-'

# TODO: remove --exit once all apps shutdown tests gracefully
MOCHA_ARGS="--exit --require=babel-register"
MOCHA_CMD="yarn run mocha $MOCHA_ARGS"
NYC_CMD="yarn run nyc --report-dir=.coverage --temp-directory=.coverage/.nyc_output --reporter=lcov --reporter=text-summary $MOCHA_CMD"

case "$1" in
  --watch) $MOCHA_CMD --watch --reporter=mocha-multi "${@: -1}"
    ;;
  --coverage) $NYC_CMD "${@: -1}"
    ;;
  *) $MOCHA_CMD "${@: -1}"
esac
