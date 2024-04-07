import { getOriginalSequence } from '../getOriginalSequence';

describe('getOriginalSequence', () => {
  it('should return unique elements from a nested array', () => {
    const subsequences = [[1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]];
    const expectedOutput = [1, 2, 3];
    const result = getOriginalSequence(subsequences);
    expect(result).toEqual(expectedOutput);
  });

  it('should return an empty array for an empty input', () => {
    const subsequences: number[][] = [];
    const expectedOutput: number[] = [];
    const result = getOriginalSequence(subsequences);
    expect(result).toEqual(expectedOutput);
  });
});
