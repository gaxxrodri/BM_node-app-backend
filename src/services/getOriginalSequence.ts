export const getOriginalSequence = (subsequences: number[][]): number[] => {
  const uniqueSet = new Set(subsequences.flat());
  return Array.from(uniqueSet).sort((a, b) => a - b);
};
