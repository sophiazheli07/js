// var x = +prompt("Enter X");
// var y = +prompt("Enter Y");
// if (x>0 && y>0) alert("First quater");
// if (x<0 && y>0) alert("Second quater");
// if (x<0 && y<0) alert("Third quater");
// if (x>0 && y<0) alert("Fourth quater");
// if (x===0 && y>0) alert("X is at the origin of the coordinates ")
// if (x===0 && y<0) alert("X is at the origin of the coordinates ")
// if (y===0 && x>0) alert("X is at the origin of the coordinates ")
// if (y===0 && x<0) alert("X is at the origin of the coordinates ")

// var x = +prompt("Enter x");
// var o = +prompt("Enter operation +/-*");
// var y = +prompt("Enter y");
// var res;
// x=x-1;
// switch(o){
//     case "+":
//         res = x+y;
//         alert(res);
//         break;
//     case "-":
//         res = x-y;
//         alert(res);
//         break;
// }

// var x = +prompt("Enter x");
// var res=x%5==0?"multiply 5":"does not multiply 5";
// alert (res);


// var x = +prompt("Enter the name of your planet");
// var res=(x=="Earth" || x=="earth")?"Earthling":"Alien";
// alert (res);


now = new Date();
document.write("Today " + now.getDate() + 
"-" + new.getMonth() + "-" now.getFullYear() +
"You visited this page at:" + now.getHours() +
":" + now.getMinutes() + " and " + now.getSeconds() +
" seconds.")