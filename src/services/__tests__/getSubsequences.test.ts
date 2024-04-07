import { getSubsequences } from '../getSubsequences';

describe('getSubsequences function', () => {
  it('should return an empty array for an empty input array', () => {
    expect(getSubsequences([])).toEqual([]);
  });

  it('should return all subsequences for a single-element array', () => {
    expect(getSubsequences([1])).toEqual([[1]]);
  });

  it('should handle arrays with duplicate elements correctly', () => {
    const subsequences = getSubsequences([1, 2, 2]);
    expect(subsequences).toEqual([[1], [2], [1, 2]]);
  });

  it('should return subsequences ordered first by length, then lexicographically', () => {
    const inputArr = [3, 1, 2];
    const expectedSubsequences = [[1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]];
    expect(getSubsequences(inputArr)).toEqual(expectedSubsequences);
  });
});
