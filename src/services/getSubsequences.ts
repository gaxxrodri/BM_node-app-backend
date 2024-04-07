export const getSubsequences = (inputArr: number[]): number[][] => {
  const arr = Array.from(new Set(inputArr)).sort((a, b) => a - b);
  const subsequences: number[][] = [];

  function backtrack (start: number, currentSubsequence: number[]): void {
    if (start <= arr.length && currentSubsequence.length > 0) {
      subsequences.push([...currentSubsequence]);
    }

    for (let i = start; i < arr.length; i++) {
      currentSubsequence.push(arr[i]);
      backtrack(i + 1, currentSubsequence);
      currentSubsequence.pop();
    }
  }

  backtrack(0, []);

  subsequences.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    }
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return a[i] - b[i];
      }
    }
    return 0;
  });

  return subsequences;
};
