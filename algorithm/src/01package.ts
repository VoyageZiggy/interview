export function testWeight(weight: number[], value: number[], size: number) {
  const len = weight.length
  // 初始化
  const dp = new Array(len).fill(0).map( () => new Array(size + 1).fill(0))

  for (let j = weight[0]; j <= size; j++) {
    dp[0][j] = value[0]
  }

  for (let i = 1; i < len; i++) {
    for (let j = 0; j <= size; j++) {
      // 状态转移方程
      if (j < weight[i] ) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i])
      }
    }
  }
  return dp[len - 1][size]
}