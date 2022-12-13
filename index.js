// var num=prompt("amount of #");
// var str="";
// while(num>0)
//     {
//         --num;
//         // str = str+"#";
//         str +=" #";
//         // num = num-1
//     }
// alert(str);


// var num = prompt("Number"); //+ is unnecessary
// var st = prompt("Power");
// var temp = num;
// if(st>0)
// {
//     while(st>1)
//     {
//         temp *= num;
//         --st;
//     }
// }
// else if(st==0) temp=1;
// else 
// {
//     while(st<-1)
//     {
//         temp *= num;
//         ++st;
//     }
//     temp = 1/temp;
// }
// alert(temp)


// var num1 = prompt("number1")
// var num2 = prompt("number2")
// var i = 0;
// var str = "";
// while(i<=num1 || i<=num2)
// {
//     if(num1 % i == 0 && num2 % 1 == 0) 
//     str += i +" ";
//     ++i;

// }
// alert(str);


// var num = prompt("factorial number");
// var temp = num;
// var i = 1;
// while(i<num)
// {
//     temp = temp*i;
//     i++;
// }
// alert(temp)



// do{
// var res = prompt("2+2*2=?");
// console.log(res);
// }while(res !="6")
// alert("correct")

// var num = 1000;
// var i = 0;
// do{
//     num /= 2;
//     ++i
// }
// while(num>50)
// alert("left "+ num+ "\namount of "+ i);


var num = prompt("number");
var temp = "";

for(i=1;i<=num && i<=100;i++){
    if(num % i == 0) temp += i+" ";
}
alert(temp)