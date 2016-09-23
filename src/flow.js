/* eslint-disable no-unused-vars */

declare function describe(title: string, fn: () => void): void;
declare function given(title: string, fn: () => void): void;

declare function before(title?: string, fn: (cb?:(err?:Error) => void) => mixed): void;
declare function beforeEach(title?: string, fn: (cb?:(err?:Error) => void) => mixed): void;
declare function after(title?: string, fn: (cb?:(err?:Error) => void) => mixed): void;
declare function afterEach(title?: string, fn: (cb?:(err?:Error) => void) => mixed): void;

declare function it(title: string, fn?: (cb?:(err?:Error) => void) => mixed): void;

declare function expect(thing: mixed): any;
