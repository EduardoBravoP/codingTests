const canConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill(false)
  table[0] = true

  for (let i = 0; i <= target.length; i++) {
    if (table[i] === true) {
      for (const word of wordBank) {
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] = true
        }
      }
    }
  }

  return table[target.length]
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