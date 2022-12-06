var h=+prompt("hours");
var m=+prompt("minutes");
var s=+prompt("seconds");
var date=new Date();
if (typeof(h)=="number" && typeof(m)=="number" && typeof(s)=="number"){
    date.setHours(h,m,s)
    // alert(date)
}
else alert("undefined")
    
if((h>0&&h<24)&&(m>=0&&m<60)&&(s>=0&&s<60))
    {   
        date.setHours(h,m,s);     
        alert(date); 
    }
else alert("undefined data")




// var n=+prompt("enter your age");
// // if(n>120||n<0) alert("undefined age")
// if(n<0){
//     n=-n; //modul
//     alert(n);
// }
// else alert(n)



// var n=parseInt(prompt())
// var n=+prompt("enter number"); //same as parseInt
// if(n<0) alert("less than 0");
// if(n>0) alert("more than 0");
// else alert("zero")



// var value = prompt('Какого цвета ваши глаза','');
// if (value == 'голубые') {alert('Мне нравятся голубые глаза');}
// else if (value == 'зеленые') {alert('Зеленый - мой любимый цвет!');}
// else if (value == 'карие') {alert('У моего отца карие глаза');}
// else if (value == 'серые') {alert('У меня тоже серые глаза');}
// else {alert('У вас и вправду такие глаза?');}



// var value = prompt('Какого цвета ваши глаза?','');
// switch (value) {
// case 'голубые' : 
// alert('Мне нравятся голубые глаза'); 
// break;
// case 'зеленые' : 
// alert('Зеленый - мой любимый цвет!'); 
// break;
// case 'карие' : 
// alert('У моего отца карие глаза'); 
// break;
// case 'серые' : 
// alert('У меня тоже серые глаза');
// break;
// default: alert('У вас и вправду такие глаза?');
// }



// var candy=3;
// switch(candy)
// {
// case 1:
//     alert("one candy");
// break;
// case 2:


// case 3:
//     alert("two or three candies");
// break;
// default:
//     // alert("i have idea bro")
//     document.write("i have idea bro")
// }
// var sunday = 0;
// var monday = 1;
// var tuesday = 2;
// var wednesday = 4;
// var thursday = 5;
// var friday = 6;
// var saturday = 7;


// var x=parseInt(prompt("enter number of the day"))
// if(x>=1 && x<6) { alert("weekday")}
// else if(x==6){ alert("saturday")}
// else {alert("sunday")}



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