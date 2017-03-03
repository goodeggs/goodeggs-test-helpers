import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import chaid from 'chaid';
import dirtyChai from 'dirty-chai';
import sinonChai from 'sinon-chai';
import chaiDateTime from 'chai-datetime';
import chaiJSONSchema from 'chai-json-schema';

chai.use(chaiAsPromised);
chai.use(dirtyChai);
chai.use(sinonChai);
chai.use(chaid);
chai.use(chaiDateTime);
chai.use(chaiJSONSchema);

// To add more chai plugins, require chai from this file.
export default chai;
