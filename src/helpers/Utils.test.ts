import { clamp } from './Utils';

describe('Utils-clamp', () => {
  it('should not modify the number if it is within min-max', () => {
    expect(clamp(5, 1, 10)).toBe(5);
    expect(clamp(1, 1, 10)).toBe(1);
    expect(clamp(10, 1, 10)).toBe(10);
  });
  it('should return max if the num is greater than max', () => {
    expect(clamp(5, 1, 4)).toBe(4);
  });

  it('should return min if the num is less than min', () => {
    expect(clamp(1, 5, 10)).toBe(5);
  });

  it('should return min if the min is greater than the max regardless of the num', () => {
    expect(clamp(1, 10, 5)).toBe(10);
    expect(clamp(10, 10, 5)).toBe(10);
    expect(clamp(100, 10, 5)).toBe(10);
    expect(clamp(5, 10, 5)).toBe(10);
  });
});
