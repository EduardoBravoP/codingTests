const countConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) {
    return memo[target]
  }

  if (target === '') {
    return 1
  }

  let count = 0

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const numOfWays = countConstruct(target.slice(word.length), wordBank, memo)
      count += numOfWays
    }
  }

  memo[target] = count
  return count
}

console.log(countConstruct('test', ['tes', 't', 'te', 'st', 'test']))
console.log(countConstruct('skateboard', ['s', 'sk', 'd', 'ate', 'bo', 'rd']))
console.log(countConstruct('eduardo', ['edu', 'ed', 'd', 'rd', 'a', 'rd', 'o']))
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
  'e',
  'eee',
  'eeee',
  'eeeeeeeeee',
  'eeeeeeeeeeee',
]))