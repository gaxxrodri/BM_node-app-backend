export const getSubsequences = (inputArr: number[]): number[][] => {
  //TODO 
  //review sorting 
    const arr = inputArr.sort((a, b) => a - b);
    const subsequences: number[][] = [];
  
    function backtrack(start: number, currentSubsequence: number[]) {
      if (start <= arr.length && currentSubsequence.length > 0) {
        subsequences.push([...currentSubsequence]);
      }
  
      for (let i = start; i < arr.length; i++) {
        currentSubsequence.push(arr[i]);
        backtrack(i + 1, currentSubsequence);
        currentSubsequence.pop();
      }
    }
  
    //O(2^n)
    backtrack(0, []);

    // O(m x log m) = O(n^2 x log 2^n) = O(2^n x n) 
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
  }