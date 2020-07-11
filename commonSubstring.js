// challenge at https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
const s1 = 'hello'
const s2 = 'world'

// function twoStrings (s1, s2) {
//   let s1Letters = {}
//   for (let letter of s1) {
//     s1Letters[letter] = (s1Letters[letter] || 0) + 1
//   }
//   for (let i = 0; i < s2.length; i++) {
//     if (s1Letters[s2[i]] !== undefined) {
//       return 'YES'
//     } else if (i === s2.length - 1 && s1Letters[s2[i]] === undefined) {
//       return 'NO'
//     } else {
//       continue
//     }
//   }
// }

function twoStrings (s1, s2) {
  for (let i = 0; i < s1.length; i++) {
    if (s2.includes(s1[i])) {
      return 'YES'
    }
  }
  return 'NO'
}
//will run faster, because only checking through s2 once

console.log(twoStrings(s1, s2))
twoStrings(s1, s2)
