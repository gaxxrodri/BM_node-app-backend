export const validateSequence = (sequence: number[] | undefined): string | null => {
  if (!sequence) {
    return 'Sequence parameter is required';
  }
  if (sequence.length === 0) {
    return 'Sequence parameter should not be empty';
  }
  if (!sequence.every((value) => typeof value === 'number')) {
    return 'Sequence parameter should contain only numbers';
  }
  return null;
};
