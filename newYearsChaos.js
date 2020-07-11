// problem from https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
const q = [1, 2, 5, 3, 7, 8, 6, 4]

function minimumBribes (q) {
  let bribes = 0
  let tooChaotic = false
  let incrementType = 0
  for (let i = 0; i < q.length; i++) {
    const placeDiff = (i) => { return q[i] - (i + 1) || 0 }
    const diffWithPrev = (i) => { return q[i] - q[i - 1] || 0 }
    if (diffWithPrev(i) > 0)
    console.log(placeDiff(i), diffWithPrev(i))
  //   if (q[i] === i + 1) {
  //     console.log(q[i], i, 'same')
  //     continue
  //   } else if (q[i] > i && Math.abs(placeDiff(i)) > 2) {
  //     tooChaotic = true
  //     break
  //   } else {
  //     console.log(placeDiff(i), placeDiff(i + 1))
  //   }
  }
  // tooChaotic ? console.log('Too chaotic') : console.log(bribes)
}

minimumBribes(q)