import { validateSequence } from '../validateSequence';

describe('validateSequence', () => {
  it('should return null for a valid sequence', () => {
    const validSequence = [1, 2, 3];
    expect(validateSequence(validSequence)).toBeNull();
  });

  it('should return an error message if sequence is undefined', () => {
    const undefinedSequence = undefined;
    expect(validateSequence(undefinedSequence)).toBe('Sequence parameter is required');
  });

  it('should return an error message if sequence is empty', () => {
    const emptySequence: number[] = [];
    expect(validateSequence(emptySequence)).toBe('Sequence parameter should not be empty');
  });

  it('should return an error message if sequence contains non-number values', () => {
    const invalidSequence: any[] = [1, 'two', 3];
    expect(validateSequence(invalidSequence)).toBe('Sequence parameter should contain only numbers');
  });
});
