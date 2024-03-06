const canSum = (target, nums, memo = {}) => {
  if (target in memo) {
    return memo[target]
  }
  
  if (target === 0) {
    return true
  }

  if (target < 0) {
    return false
  }

  for (let num of nums) {
    const rest = target - num

    if (canSum(rest, nums, memo)) {
      memo[target] = true
      return true
    }
  }

  memo[target] = false
  return false
}

console.log(canSum(7, [2, 3]))
console.log(canSum(7, [5, 3, 4, 7]))
console.log(canSum(7, [2,4]))
console.log(canSum(8, [2, 3, 5]))
console.log(canSum(300, [10, 5]))