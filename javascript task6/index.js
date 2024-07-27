// shallow copy //

let student = {
    name:'Dinesh',
    age:22,
    class:{
        course:'B.Tech',
        stream:'ECE'
    }
}
let student1 = Object.assign({},student)
let student2={...student}
student1.class.stream='CSE'
console.log(student1)
console.log(student2)

// 2. Deep Copy //

let details={
    Name:'Ram Rao',
    Age:21,
    gender:'male',
    education:{
        college:'KL',
        course:'Btech',
        year:3
    }

}
let detailsDeepCopy = JSON.parse(JSON.stringify(details));
detailsDeepCopy.education.college = 'New College';
detailsDeepCopy.education.year = 4;

console.log('Origianl details', details)
console.log('deepcopied details ',detailsDeepCopy)

// using Spread Operator //
// Spread Array 

let numb =[1,2,3,4,5,6,7]
let cities = ['Atp','Banglore','Arekere','Chennai','Hosur','Hyderabad','KPHB']

let spread =[...numb,...cities]
console.log(spread)

// spread Object 

let num ={
    num1:11,
    num2:12,
    num3:13,
    num4:14,
    num5:15,
    num6:16
}

let area ={
    area1:'kkp',
    area2:'Bjp',
    area3:'Pslr',
    area4:'Jtl',
    area5:'agh',
    area6:'oldtown'
}

let spread1 ={...num,...area}
console.log(spread1)

// Rest operator //
// Rest in functions 

function sum(...numbers){
    return numbers.reduce((a,b)=>a+b,0)

}
console.log(sum(1,2,3))
console.log(sum(100,200,30))
console.log(sum())

//Rest in Array Destructuring

let array=["Dinesh","Yagnesh","Ganesh","Ramesh","venu"]

let[first,second,...remaining]=array
console.log('First Element is' ,first)
console.log('Second ELement is',second)
console.log('Remaining element is ',remaining)






