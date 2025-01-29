process.stdin.resume();
process.stdin.setEncoding("utf8");

process.stdin.once("data", (chunk) => {
  const input = chunk.trim().split("\n");
  const [N, M] = input[0].split(" ").map(Number);
  const matriz = input.slice(1).map((row) => row.split(" ").map(Number));

  function longestIncreasingPath(N, M, matriz) {
    const dp = Array.from({ length: N }, () => Array(M).fill(1));

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (i > 0 && matriz[i][j] > matriz[i - 1][j]) {
          dp[i][j] = Math.max(dp[i][j], dp[i - 1][j] + 1);
        }
        if (j > 0 && matriz[i][j] > matriz[i][j - 1]) {
          dp[i][j] = Math.max(dp[i][j], dp[i][j - 1] + 1);
        }
      }
    }

    let maxLength = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        maxLength = Math.max(maxLength, dp[i][j]);
      }
    }

    return maxLength;
  }

  const res = longestIncreasingPath(N, M, matriz);
  console.log(parseInt(res));
});
