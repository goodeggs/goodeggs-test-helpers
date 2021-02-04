declare module 'date-test-helpers' {
  interface TzidMethods {
    time: (iso8601DateTime: string) => Date;
    startOfDay: (iso8601Date: string) => Date;
    preciseTime: (iso8601DateTimeWithMs: string) => Date;
  }

  const dateTestHelpers: {
    central: TzidMethods;
    eastern: TzidMethods;
    mountain: TzidMethods;
    pacific: TzidMethods;
    utc: TzidMethods;
  };

  export default dateTestHelpers;
}
