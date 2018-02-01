// @flow
import {describe, beforeEach, it} from 'mocha';
import dateTestHelpers from 'date-test-helpers';
import bunyan from 'bunyan';

import {expect, useSinonSandbox, sinon} from '../';

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
      expect(dateTestHelpers.pacific.time('2015-04-01 00:00:00'))
        .to.equalDate(dateTestHelpers.pacific.time('2015-04-01 00:00:00'));
    });

    it('has chai-id', function () {
      expect({_id: 'foo'}).to.have.id('foo');
      expect([{id: 'a'}, {id: 'b'}]).to.have.ids(['a', 'b']);
      expect([{id: 'a'}, {id: 'b'}]).to.have.same.unordered.ids([{id: 'b'}, {id: 'a'}]);
      expect([{id: 'a'}, {id: 'b'}]).to.include.same.ids([{id: 'a'}]);
    });
  });

  describe('useSinonSandbox()', function () {
    useSinonSandbox();

    beforeEach('create an object with methods', function () {
      this.foo = {
        bar () {},
      };
    });

    it('has a sinon sandbox and sinon-chai', function () {
      this.stub(this.foo, 'bar');
      this.foo.bar();
      expect(this.foo.bar).to.have.been.called();
    });

    it('restores the sinon sandbox after each test', function () {
      expect();
    });

    it('stubs the clock to the beginning of the UNIX epoch by default', function () {
      expect(Date.now()).to.equal(0);
    });

    it('can change the time with this.stubTime()', function () {
      const time = dateTestHelpers.pacific.time('2012-11-22 00:00:00');
      this.stubTime(time);
      expect(Date.now()).to.equal(time.valueOf());
    });

    it('will return whatever got passed into this.stubTime()', function () {
      const date = new Date(200);
      expect(this.stubTime(date)).to.equal(date);
    });

    it('can stub logger', function () {
      const logger = bunyan.createLogger({name: 'myapp'});
      this.stubLogger({logger});
      logger.info('foo bar');
      expect(logger.info).to.have.been.calledOnce();
    });
  });

  describe('sinon', function () {
    it('can use', function () {
      const foo = {bar: sinon.stub()};
      foo.bar();
      expect(foo.bar).to.have.been.calledOnce();
    });
  });
});
