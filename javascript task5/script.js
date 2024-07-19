// push and pop method //

let numbers=[]
numbers.push(1,2,3)
console.log(numbers)

numbers.pop()
console.log(numbers)

console.log(numbers)

// shift and unshift //

let letters=['a','b','c']

letters.shift()
console.log(letters)

letters.unshift('z')
console.log(letters)

// slice //

{
    let number=[1,2,3,4,5]
    let sa=number.slice(1,4)
    console.log(sa)

    console.log(number)
}

// splice //

{
    let colours=['red','green','blue','yellow']
    colours.splice(2,1)
    console.log(colours)

    colours.splice(2,0,'purple','orange')
    console.log(colours)
}

// object creation //

let carObject={
    properties:{
        make:'india',
        model:'phanthon',
        year:2020
    }
    
}
console.log(carObject)
console.log(carObject.properties['make'])

// property deletion //

delete carObject.properties.year
console.log(carObject)

// nested objects //

let person = {
    name:'Dinesh',
    age:23,
    address:{
        street:'srp nagar',
        city:'hyderabad',
        zipcode:500085
    }
}
console.log(person)

// accessing object properties //

console.log(person.address['city'])

// arrow function //

let greet=(name)=>{
    return(`Hello ${name}`)
}
console.log(greet('dinesh'))
