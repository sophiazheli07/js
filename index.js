// var param1 = +prompt("enter number 1");
// var param2 = +prompt("enter number 2");
// function func(param1,param2) {
//     var res = parseInt((param1/param2)*100);
//     return res;
//   }
// alert (func(param1,param2));

// var num1 = +prompt("enter first number");
// var num2 = +prompt("enter second number");
// var num3 = +prompt("enter third number");
// var num4 = +prompt("enter fourth number");
// var num5 = +prompt("enter fifth number");
// function func(num1,num2,num3,num4,num5){
//     if(Number.isNan) alert("input error")
//     else{
//         num1=num1 || 0;
//         num2=num2 || 0;
//         num3=num3 || 0;
//         num4=num4 || 0;
//         num5=num5 || 0;
//         var res = num1 + num2 + num3 + num4 + num5;
//         return res;
//     }
// }
// alert(func(num1,num2,num3,num4,num5));






//variation num 1

// var num1 = +prompt("enter first number");
// var num2 = +prompt("enter second number");
// var num3 = +prompt("enter third number");
// var num4 = +prompt("enter fourth number");
// var num5 = +prompt("enter fifth number");
// function func(num1,num2,num3,num4,num5){
//     if(Number.isNan) alert("input error")
//         if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5){
//             return num1;
//             } 
//           else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5){
//              return num2;
//             }
//           else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5){
//              return num3;
//             }
//           else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5){
//              return num4;
//             }
//           else if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4){
//              return num5;
//             }
// };
// alert(func(num1,num2,num3,num4,num5));



//variation num 2

// function get_max_num(a,b,c,d,e){
//     var max_num = 0;
//     max_num = max_num < a ? max_num = a : max_num;
//     max_num = max_num < b ? max_num = b : max_num;
//     max_num = max_num < c ? max_num = c : max_num;
//     max_num = max_num < d ? max_num = d : max_num;
//     max_num = max_num < e ? max_num = e : max_num;
//     return max_num;
// }
 
// var num1 = +prompt('Введіть перше число');
// var num2 = +prompt('Введіть друге число');
// var num3 = +prompt('Введіть третэ число');
// var num4 = +prompt('Введіть четверте число');
// var num5 = +prompt('Введіть п\'яте число');
// alert('Максимальне число - ' + get_max_num(num1, num2, num3, num4, num5));


var num1 = +prompt("enter your number");
var num2 = +prompt("enter your number");
var check = +prompt("enter your number");
function name(num1,num2,check){
    for(i=num1; i<=num2; i++){
        if(check==1){
            if(i%2==0) alert(i+" ");
        }
        else{
            if(i%2!==0) alert(i+" ");
        }   
    }
}
alert(name(num1,num2,check))


