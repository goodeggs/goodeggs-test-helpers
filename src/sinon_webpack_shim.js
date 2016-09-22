// importing sinon causes a webpack error:
// instead, attach to window via karma-sinon, and require from here :(
// https://github.com/webpack/webpack/issues/304
export default window.sinon; // eslint-disable-line
