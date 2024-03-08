const allConstruct = (target, wordBank) => {
  const table = Array(target.length + 1)
    .fill()
    .map(() => [])

  table[0] = [[]]

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        const newCombinations = table[i].map(subArray => [...subArray, word])

        table[i + word.length].push(...newCombinations)
      }
    }
  }

  return table[target.length]
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