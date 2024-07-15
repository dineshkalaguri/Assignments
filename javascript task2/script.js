{
    let myNumbers=2
if(myNumbers > 0){
    console.log('Positive Number');
}
else if(myNumbers < 0){
    console.log('Negative Number');
}
else{
    console.log('Zero')
}
}

{
    let myAge=19;
result=myAge>=18?"Adult":"Minor";
console.log(result);
}

{
    let num;
for(num=1;num<=10;num++){
    console.log(num);
}
}

{
    let num;
for(num=10;num>=1;num--){
    console.log(num);
}
}

{
    let day=5
switch(true){
    case(day==1):
    console.log('monday')
    break;
    case(day==2):
    console.log('tuesday')
    break;
    case(day==3):
    console.log('wednesday')
    break;
    case(day==4):
    console.log('thursday')
    break;
    case(day==5):
    console.log('friday')
    break;
    case(day==6):
    console.log('saturday')
    break;
    case(day==7):
    console.log('sunday')
    break;
    default:
        console.log('no day')
}
}

// output//
// Positive Number
// Adult
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// friday 