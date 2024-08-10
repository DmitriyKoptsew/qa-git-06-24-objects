const arr = [ 1, 2, 3, 4, 10, 13, 18 ]

// const str = arr.join("/")

// console.log(str)

// for(let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

// arr.forEach((item) => {
//   console.log(item)
// })

// console.log(arr[arr.length - 1])

// console.log(arr.at(-2))

// const filtered = arr.filter((item, index) => index % 2 === 0)
// console.log(filtered)

// const mappedArr = arr.map((item) => {
//   return {
//     oldValue: item,
//     newValue: item * 2
//   }
// })

// let newArr = []
// for(let value in arr) {
//   newArr.push({
//     oldValue: value,
//     newValue: value * 2
//   })
// }

// const sum = arr.reduce((acc, item) => {
//   acc += item
//   return acc
// }, 0)

// console.log(sum)



const obj = arr.reduce((acc, item) => {
  if(item % 2 === 0) {
    acc[0] += item
  } else {
    acc[1] += item
  }

  return acc
}, [0, 0])
console.log(obj)

