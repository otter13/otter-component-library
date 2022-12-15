/**
 * Clamp returns the closest number to the original value between the min and max
 * @param num Number to change
 * @param min minimum allowed
 * @param max maximum allowed
 * @returns the new clamped number
 */
export const clamp = (num: number, min: number, max: number) => {
  if (min > max) return min;
  return Math.min(Math.max(num, min), max);
};
