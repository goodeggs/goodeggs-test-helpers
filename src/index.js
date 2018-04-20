// @flow
// TODO, ideally we would export {desribe, it} etc from mocha.
// But those are not available when imported into thirdparty dependencies :(
import chai from './chai';

const {expect} = chai;
export {expect, chai};
export {default as useSinonSandbox} from './use_sinon_sandbox';
