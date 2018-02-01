// @flow
import chai from 'chai'; // eslint-disable-line goodeggs/import-order, goodeggs/import-default
import chaiAsPromised from 'chai-as-promised';
import chaid from 'chaid';
import dirtyChai from 'dirty-chai';
import sinonChai from 'sinon-chai';
import chaiDateTime from 'chai-datetime';

chai.use(chaiAsPromised);
chai.use(dirtyChai);
chai.use(sinonChai);
chai.use(chaid);
chai.use(chaiDateTime);

const expect = chai.expect; // eslint-disable-line goodeggs/import-no-named-as-default-member
export {expect};
