// from hackerRank challange https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting

function countSwaps (a) {
  let array = a.slice()
  let swapCount = 0
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
        swapCount++
      }
    }
  }
  console.log(`Array is sorted in ${swapCount} swaps`)
  console.log(`First Element: ${array[0]}`)
  console.log(`Last Element: ${array[array.length - 1]}`)
}
