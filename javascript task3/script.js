// Multiplication using for //

let num = 5;
for(i=1;i<=10;i++)
    console.log(num + '*' + i + '=' + num * i )

// output //
// 5*1=5
// 5*2=10
// 5*3=15
// 5*4=20
// 5*5=25
// 5*6=30
// 5*7=35
// 5*8=40
// 5*9=45
// 5*10=50

// sum of even numbers //

let sum=0
for(i=1;i<=50;i++){
    if(i%2==0)
        sum+=i;
}
console.log(sum)

// output //
// 650

// sum of odd numbers using while loop //

{
    let i = 1
    let sum = 0
    while(i<=20){
        if(i%2 !==0)
            sum=sum+i
        i++;

    }
    console.log(sum)

    // output //
    // 100
}

// factorial calculation //

{
    let i = 1
    factorial = 1
    while(i<=5){
        factorial=factorial*i
        i++
    }
    console.log(factorial)
    // output //
    //120
}

// prime numbers using while loop //
{
    let num=2
    while(num<=20){
       let isPrime=0
       for(let i=2;i<num;i++){
           if(num%i==0){
               isPrime=1
               break
            }
        }
        if(isPrime==0)
           console.log(num)
    num++
    }
}
// output //
// 2
// 3
// 5
// 7
// 11
// 13
// 17
// 19 
    