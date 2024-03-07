const canSum = (target, nums) => {
  const table = Array(target + 1).fill(false)
  table[0] = true

  for (let i = 0; i <= target; i++) {
    if (table[i] === true) {
      for (const num of nums) {
        table[i + num] = true
      }
    }
  }

  return table[target]
}

console.log(canSum(7, [2, 3]))
console.log(canSum(7, [5, 3, 4, 7]))
console.log(canSum(7, [2, 4]))
console.log(canSum(300, [7, 14]))
console.log(canSum(10, [3, 8]))
