const allConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) {
    return memo[target]
  }
  
  if (target === '') {
    return [[]]
  }

  let allWays = []
  
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length)

      const suffixWays = allConstruct(suffix, wordBank, memo)

      const targetWays = suffixWays.map(way => [word, ...way])

      allWays.push(...targetWays)
    }
  }

  memo[target] = allWays
  return allWays
}

console.log(allConstruct('test', ['tes', 't', 'te', 'st', 'test']))
console.log(allConstruct('skateboard', ['s', 'sk', 'd', 'ate', 'bo', 'rd']))
console.log(allConstruct('eduardo', ['edu', 'ed', 'd', 'rd', 'a', 'r', 'o']))
console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
  'eeee',
  'eeeeeeeeee',
  'eeeeeeeeeeee',
  'f'
]))