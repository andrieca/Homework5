// №1
// let d = 7 ;
// console.log(d);
// console.log(`результат: ${d**2}`);
// console.log(`результат: ${d**3}`);

// №2
// let att = Number(prompt("ввести число"));
// if ( att % 2 ==0){
//     console.log(`${att*2}`);
// }


// №3
// let att = Number(prompt("ввести число"));
// if (att > 0){
//     console.log("положительное число");
// }
// else if (att < 0){
//     console.log(" отрицательное число");
// }
// else{
//     console.log("равно 0 ");
// }


// №4
// let a = Number(prompt("ввести число 1"));
// let b = Number(prompt("ввести число 2"));
// if (a > b){
//     console.log(`${ a + b }`);
// }
// else if (a < b){
//     console.log(`${a * b}`);
// }
// else{
//     console.log(" одинаковіе числа");
// }


// №5
// let a = Number(prompt("ввести число"));
// if ( a < 0){
//     console.log(`${a**2}`);
// }
// else{
//     console.log('ошибка');
// }


// №6
// let a = Number(prompt("Колличество учеников"));
// let b = Number(prompt("Колличество стульев"));
// if ( a > b){
//     console.log("стульев не хватает");
// }
// else{
//     console.log("стульев хватает");
// }



// №7
// 
// let a = [];
// console.log("старт");
// for (let num=1; num<10; num++){
//     console.log(num);
// }
// console.log("финиш");



//  №8
//  let a = [];
// for ( num=10; num<50; num++){
//     if (num % 5 == 0){
//         console.log(num)
//      }
//  }


// №9
// let arr = [];
//  let a = Number(prompt("enter"));
//  arr.push(a);
//  for ( let num=a; num<a+14; num++){
//      if (num % 2 ==1){
//          console.log(num)
//      }
//   }


// №10
// let arr = [];
// for (let num=15; num < 50; num++){
//     console.log(num);
// }


// №11
// let arr = [];
// for(let num=0; num < 50; num++){
//     if(num % 2 == 1){
//         console.log(num);
//     }
// }


// №13
// let arr = [1,4,7,8];
// let sum = 0;
// for (let num = 0; num < arr.length; num++){
//     sum+= arr[num];
// }
// console.log(sum);


// №14
// let arr = [1,4,7,8,6];
//  let sum = 0;
//  for (let num = 0; num < arr.length; num++){
//     if(arr[num] % 2 == 1){
//         sum+= arr[num];
//     }
//  }
//  console.log(sum);


// №15
let arr = [1,4,7,8,6];
 let sum1 = 0;
 for (let num = 0; num < arr.length; num++){
    if(arr[num] % 2 == 1){
        sum1+= arr[num];
    }
 }
 console.log(sum1);
 
 let sum2 = 0;
 for (let num = 0; num < arr.length; num++){
    if(arr[num] % 2 == 0){
        sum2+= arr[num];
    }
 }
 console.log(sum2);

 if(sum1 > sum2){
    console.log(`${sum1 - sum2}`);
 }
 else{
    console.log(`${sum2 - sum1}`);
 }