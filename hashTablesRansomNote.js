const magazine = ['give', 'me', 'one', 'grand', 'today', 'night']
const note = ['give', 'one', 'grand', 'today']

// function checkMagazine (magazine, note) {
//   for (const word of magazine) {
//     if (note.includes(word)) {
//       const index = note.indexOf(word)
//       note.splice(index, 1)
//     }
//   }
//   if (note.length === 0) {
//     return 'Yes'
//   } else {
//     return 'No'
//   }
// }

function checkMagazine (magazine, note) {
  let combinedWords = {}
  let replicable = true
  for (let word of magazine) {
    combinedWords[word] = (combinedWords[word] || 0) + 1
  }
  for (let word of note) {
    combinedWords[word] = (combinedWords[word] || 0) - 1
    if (combinedWords[word] < 0) {
      replicable = false
      break
    }
  }
  console.log(replicable ? 'Yes' : 'No')
}

checkMagazine(magazine, note)
