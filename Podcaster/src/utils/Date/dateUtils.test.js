import { calculateDateDifference } from './dateUtils';

describe('calculateDateDifference', () => {
  it('returns true if the time difference is less than one day', () => {
    const currentTimestamp = new Date().getTime();
    const lastFetchTimestamp = currentTimestamp - 12 * 60 * 60 * 1000; // 12 hours ago

    const result = calculateDateDifference(currentTimestamp, lastFetchTimestamp);

    expect(result).toBe(true);
  });

  it('returns false if the time difference is equal to one day', () => {
    const currentTimestamp = new Date().getTime();
    const lastFetchTimestamp = currentTimestamp - 24 * 60 * 60 * 1000; // 24 hours ago

    const result = calculateDateDifference(currentTimestamp, lastFetchTimestamp);

    expect(result).toBe(false);
  });

  it('returns false if the time difference is greater than one day', () => {
    const currentTimestamp = new Date().getTime();
    const lastFetchTimestamp = currentTimestamp - 2 * 24 * 60 * 60 * 1000; // 2 days ago

    const result = calculateDateDifference(currentTimestamp, lastFetchTimestamp);

    expect(result).toBe(false);
  });
});
