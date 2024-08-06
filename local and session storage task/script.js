// Local storage //

localStorage.setItem('name','dinesh'); // set data
let name1 = localStorage.getItem('name'); // get data
console.log('localstorage :',name1);

// Session storage //

sessionStorage.setItem('bike','H2r'); // set data
let bike1 = sessionStorage.getItem('bike'); // get data
console.log('sessionstorage :',bike1)

// Remove from storage //

localStorage.removeItem('name'); // remove from localstorage
let removename1 = localStorage.getItem('name');
console.log('localremovedata :',removename1);

sessionStorage.removeItem('bike'); //remove from session storage
let removebike1 = sessionStorage.getItem('bike');
console.log('sessionremovedata :',removebike1);

// JSON object storage //

const person ={
    name :'Shahataz',
    age :21,
    gender : 'female',
    phonenumber :2211443366
}

localStorage.setItem('person',JSON.stringify(person));
let user = JSON.parse(localStorage.getItem('person'))
console.log('user obj :',user)

sessionStorage.setItem('person1',JSON.stringify(person));
let user1 = JSON.parse(sessionStorage.getItem('person1'));
console.log('user1 obj :', user1);

// clear local and session storages //

localStorage.clear();
console.log(localStorage.getItem('person'))

sessionStorage.clear();
console.log(sessionStorage.getItem('person1'))
