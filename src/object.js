import 'dotenv/config'

const key_age = 'age'

const firstObject = {
  name: 'Andrey Osipuk',
  [key_age]: 30,
  roles: ['mentor', 'teacher'],
  greet: function() {
    console.log('hello')
  },
  bio: 'loremIpsum(100)',
  'key with spaces': 'value with spaces',
  socials: ''
}

// console.log(1, firstObject)

// // delete firstObject.socials

// firstObject.socials = undefined

// console.log(2, firstObject)

// const secondObject =  firstObject; //true
// const secondObject = Object.assign({}, firstObject); //false
const secondObject = { ...firstObject }

// const name = firstObject.name
// const age = firstObject.age
// const roles = firstObject.roles
// const bio = firstObject.bio

// const {age, name, roles, bio, ...rest} = firstObject

const arr = ['vkontakte', 'telegram', 'instagram']

// const [vk, tg, ...restArray] = arr

// Проверка на ключ
// if('socials' in firstObject) {
//   console.log(true)
// } else {
//   console.log(false)
// }

// // Проверка на значение
// if(firstObject.socials) {
//   console.log(true)
// } else {
//   console.log(false)
// }

// for(let key in firstObject) {
//   console.log(`key: ${key}, value: ${firstObject[key]}`)

//   console.log('key: ' +  key +  ', value: '  + firstObject[key])
// }

// for(let value of firstObject) {
//   console.log(value)
// }

const url = process.env.SERVER_URL

console.log(url)
