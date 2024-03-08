const bestSum = (target, nums) => {
  const table = Array(target + 1).fill(null)
  table[0] = []

  for (let i = 0; i <= target; i++) {
    if (table[i] !== null) {
      for (const num of nums) {
        const combination = [...table[i], num]
        if (!table[i + num] || table[i + num].length > combination.length) {
          table[i + num] = combination
        }
      }
    }
  }

  return table[target]
}

console.log(bestSum(7, [2, 3]))
console.log(bestSum(7, [5, 3, 4, 7]))
console.log(bestSum(7, [2, 4]))
console.log(bestSum(300, [7, 14]))