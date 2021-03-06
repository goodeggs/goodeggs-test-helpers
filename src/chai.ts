import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import dirtyChai from 'dirty-chai';
import sinonChai from 'sinon-chai';
import chaiDateTime from 'chai-datetime';

chai.use(chaiAsPromised);
chai.use(dirtyChai);
chai.use(sinonChai);
chai.use(chaiDateTime);

export default chai;
