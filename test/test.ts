import {describe, beforeEach, it} from 'mocha';
import dateTestHelpers from 'date-test-helpers';
import bunyan from 'bunyan';

import {expect, useSinonSandbox} from '../src';

describe('mocha helpers', function () {
  describe('chai expect', function () {
    it('has expect', function () {
      expect(1).to.equal(1);
    });

    it('has chai as promised', function () {
      const p = Promise.resolve(300);
      return expect(p).to.eventually.equal(300);
    });

    it('has dirty chai', function () {
      expect(true).to.be.true();
    });

    it('has chai-datetime', function () {
      expect(dateTestHelpers.pacific.time('2015-04-01 00:00:00')).to.equalDate(
        dateTestHelpers.pacific.time('2015-04-01 00:00:00'),
      );
    });

    it('has chai-id', function () {
      expect({_id: 'foo'}).to.have.id('foo');
      expect([{id: 'a'}, {id: 'b'}]).to.have.ids(['a', 'b']);
      expect([{id: 'a'}, {id: 'b'}]).to.have.same.unordered.ids([{id: 'b'}, {id: 'a'}]);
      expect([{id: 'a'}, {id: 'b'}]).to.include.same.ids([{id: 'a'}]);
    });
  });

  describe('useSinonSandbox()', function () {
    const {sandbox, stubLogger} = useSinonSandbox();

    beforeEach('create an object with methods', function () {
      this.foo = {
        bar() {},
      };
    });

    it('has a sinon sandbox and sinon-chai', function () {
      sandbox.stub(this.foo, 'bar').callsFake((n: number): number => n + 3);
      this.foo.bar();
      expect(this.foo.bar).to.have.been.called();
    });

    it('restores the sinon sandbox after each test', function () {
      expect(this.foo.bar.callCount).not.to.be.ok();
    });

    it('can stub the clock', function () {
      sandbox.useFakeTimers({now: 0});
      expect(Date.now()).to.equal(0);
    });

    it('can change the time with clock.setSystemTime()', function () {
      const clock = sandbox.useFakeTimers({now: 0});
      const time = dateTestHelpers.pacific.time('2012-11-22 00:00:00');
      clock.setSystemTime(time);
      expect(Date.now()).to.equal(time.valueOf());
    });

    it('can stub logger', function () {
      const logger = bunyan.createLogger({name: 'myapp'});
      stubLogger(logger);
      logger.info('foo bar');
      expect(logger.info).to.have.been.calledOnce();
    });

    it('can use matchers', function () {
      expect(sandbox.match).to.be.a('function');
    });
  });
});
