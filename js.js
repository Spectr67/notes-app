const student = {
  id: 9,
  firstName: 'Isiah',
  secondName: 'Falcon',
  age: 21,
  faculty: 'Slytherin',
  isOnBudget: false,
}

let result = Object.values(student).every(v =>
  typeof v === 'boolean' ? true : v
)

console.log(result)

const numbers = [1, 3, 5, 9, 11]

console.log(numbers.every(num => num < 11))

console.log(numbers.some(num => num === 9))

// if (false) {
//   console.log('ok')
// } else {
//   console.log('bad')
// }

// let q = true ? console.log('ok') : console.log('bad')

// let q = undefined

// q

// let q = false ? 11 : 22

// let s = console.log('hello')

// s

// function funcA() {
//   2 + 3
// }

// s = funcA()

// s
