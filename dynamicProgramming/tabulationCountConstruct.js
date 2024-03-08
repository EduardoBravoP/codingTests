const countConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill(0)
  table[0] = 1

  for (let i = 0; i <= target.length; i++) {
      for (const word of wordBank) {
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] += table[i]
        }
      }
  }

  return table[target.length]
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