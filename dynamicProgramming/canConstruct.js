const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) {
    return memo[target]
  }
  
  if (target === '') {
    return true
  }

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length)

      if (canConstruct(suffix, wordBank, memo)) {
        memo[target] = true
        return true
      }
    }
  }

  memo[target] = false
  return false
}

console.log(canConstruct('word', ['w', 'd', 'wor', 'wo']))
console.log(canConstruct('skateboard', ['s', 'sk', 'd', 'ate', 'bo', 'rd']))
console.log(canConstruct('eduardo', ['edu', 'ed', 'd', 'rd', 'a', 'rd', 'o']))
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
  'e',
  'eee',
  'eeee',
  'eeeeeeeeee',
  'eeeeeeeeeeee'
]))