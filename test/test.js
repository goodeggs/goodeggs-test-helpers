/* eslint-env goodeggs/server-side-test */
import '../build';

import Promise from 'bluebird';
import geomoment from 'geomoment';

describe('mocha helpers', function () {
  describe('given', function () {
    let testHasRun = false;
    let testWasSkipped = true;

    given('some context', function () {
      it('runs the test', function () {
        testHasRun = true;
      });
    });

    given.skip('some other context', function () {
      it('skips this test', function () {
        testWasSkipped = false;
      });
    });

    after('assert that it ran the test', function () {
      this.expect(testHasRun).to.be.true();
    });

    after('assert that it skipped the test', function () {
      this.expect(testWasSkipped).to.be.true();
    });
  });

  describe('withContext', function () {
    withContext('foo', 'bar');
    withContext('baz', function () {
      return Promise.delay(3).return(this.foo);
    });

    it('puts the context on the context', function () {
      this.expect(this.foo).to.equal('bar');
      this.expect(this.baz).to.equal('bar');
    });
  });

  describe('context', function () {
    describe('chai', function () {
      it('has chai.expect', function () {
        this.expect(1).to.equal(1);
      });

      it('has chai as promised', function () {
        const p = Promise.resolve(300);
        return this.expect(p).to.eventually.equal(300);
      });

      it('has dirty chai', function () {
        this.expect(true).to.be.true();
      });

      it('has chai-datetime', function () {
        this.expect(geomoment.pacific('2015-04-01', 'YYYY-MM-DD').toDate())
          .to.equalDate(geomoment.pacific('2015-04-01', 'YYYY-MM-DD').toDate());
      });
    });

    describe('node assert', function () {
      it('has node assert', function () {
        this.assert(true);
      });
    });

    describe('sinon sandbox', function () {
      beforeEach('create an object with methods', function () {
        this.foo = {
          bar () {},
        };
      });

      it('has a sinon sandbox and sinon-chai', function () {
        this.stub(this.foo, 'bar');
        this.foo.bar();
        this.expect(this.foo.bar).to.have.been.called();
      });

      it('restores the sinon sandbox after each test', function () {
        this.expect();
      });

      describe('time', function () {
        it('stubs the clock to the beginning of the UNIX epoch by default', function () {
          this.expect(Date.now()).to.equal(0);
        });

        it('can change the time with this.stubTime()', function () {
          const moment = geomoment.pacific('2012-11-22', 'YYYY-MM-DD');
          this.stubTime(moment.toDate());
          this.expect(Date.now()).to.equal(moment.valueOf());
        });

        it('will return whatever got passed into this.stubTime()', function () {
          const date = new Date(200);
          this.expect(this.stubTime(date)).to.equal(date);
        });
      });
    });
  });
});
