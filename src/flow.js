/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */

declare function describe(title: string, fn: () => void): void;
declare function given(title: string, fn: () => void): void;
declare function context(title: string, fn: () => void): void;

type possiblyAsyncFunction =
  ((cb: (err?:Error) => void) => void) |
  (() => (void | Promise<any>));

declare function before(title: string, fn: possiblyAsyncFunction): void;
declare function before(fn: possiblyAsyncFunction): void;
declare function beforeEach(title: string, fn: possiblyAsyncFunction): void;
declare function beforeEach(fn: possiblyAsyncFunction): void;
declare function after(title: string, fn: possiblyAsyncFunction): void;
declare function after(fn: possiblyAsyncFunction): void;
declare function afterEach(title: string, fn: possiblyAsyncFunction): void;
declare function afterEach(fn: possiblyAsyncFunction): void;
declare function withContext(name: string, val: mixed): void;

declare function it(title: string, fn?: (cb?:(err?:Error) => void) => mixed): void;

declare function expect(thing: mixed): any;
