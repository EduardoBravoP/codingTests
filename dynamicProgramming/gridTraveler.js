const gridTraveler = (m, n, memo = {}) => {
  const key1 = m + ',' + n
  const key2 = n + ',' + m

  if (key1 in memo) {
    return memo[key1]
  }
  if (key2 in memo) {
    return memo[key2]
  }

  if (m === 1 || n === 1) {
    return 1
  }

  if (m === 0 || n === 0) {
    return 0
  }

  memo[key1] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)

  return memo[key1]
}

console.log(gridTraveler(1, 1))
console.log(gridTraveler(2, 3))
console.log(gridTraveler(3, 2))
console.log(gridTraveler(3, 3))
console.log(gridTraveler(18, 18))