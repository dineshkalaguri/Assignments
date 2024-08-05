// FoeEach //

let numbers = [1,2,3,4,5]
numbers.forEach((itr,index) =>{
    console.log(itr)
})

// Map //

let numbers1 = [1,2,3,4,5,6,7]
let newAarray = numbers1.map((itr,index) =>{
    return(itr*2)
})
console.log('array :',numbers1)
console.log('map array :',newAarray)

// Filter //

let numbers2 = [1,2,3,4,5,6,7,8,9,10]
let filterArray = numbers2.filter((itr,index) =>{
    if(itr%2===0)
        return(itr)
})
console.log('array :',numbers2)
console.log('filter array :',filterArray)

// Reduce //

let numbers3 = [1,2,3,4,5,6]
let sum = numbers3.reduce((accumalator,itr) =>{
    return accumalator = accumalator +itr
})
console.log('reduce array :',sum)

// Find //

let persons = [
    {
        name :'Dinesh',
        age :26
    },

    {
        name :'Shahataz',
        age :18
    },

    {
        name :'Chinni',
        age :17
    },

    {
        name :'Niranjan',
        age :24
    },

    {
        name :'Karthik',
        age :23
    }
]
let resultFind = persons.find((person) => person.age > 25)
console.log(resultFind.name)

// FindIndex //

let resultFindIndex = persons.findIndex((person) => person.age < 18)
console.log(resultFindIndex)

// Output //
// 1
// 2
// 3
// 4
// 5
// array : [
//   1, 2, 3, 4,
//   5, 6, 7
// ]
// map array : [
//    2,  4,  6, 8,
//   10, 12, 14
// ]
// array : [
//   1, 2, 3, 4,  5,
//   6, 7, 8, 9, 10
// ]
// filter array : [ 2, 4, 6, 8, 10 ]
// reduce array : 21
// Dinesh
// 2