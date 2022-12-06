var sunday = 0;
var monday = 1;
var tuesday = 2;
var wednesday = 4;
var thursday = 5;
var friday = 6;
var saturday = 7;

var x=parseInt(prompt("enter number of the day"))
if(x>=1 && x<6) { alert("weekday")}
else if(x==6){ alert("saturday")}
else {alert("sunday")}


// var x =parseInt(prompt("enter X"));
// var y =parseInt(prompt("enter Y"));
// var o = prompt("enter operator");
// if(o=="+")alert(x+" + "+y+" = "+(x+y))
// else if (o=="-")alert(x+" - "+y+" = "+(x-y))
// else if (o=="*")alert(x+" * "+y+" = "+(x*y))
// else if (o=="/")alert(x+" / "+y+" = "+(x/y))
// else alert("mistake")


// if(10<5){
//     alert("true");
//      alert("true1");
//       alert("true3");
// }



// var age;
// age = 20;
// if (age <14) alert("Это ребенок")
// else { 

// if (age >= 14 && age < 18) 
// { alert("Это подросток"); }
// else 
// {alert("Это взрослый");}

// }



// var h=parseInt(prompt("hours?"));
// var m=parseInt(prompt("minutes?"));
// if(m>=59){
//     m="00";
//     h=h+1
// }else{
//     m++
// }
// if(h>=24){
//     h="00"
// }
// alert("in a minute it will be "+h+" hours "+m+" minutes")
// console.log(h)
// h=parseInt(h)
// alert(typeof(h))