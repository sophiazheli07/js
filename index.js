// var min = +prompt("min");
// var max = +prompt("max");
// var res = "";
// var temp = 1;
// if(min > max)
// {
//     temp=max;
//     max=min;
//     min=max;
// }
// for(i=min;i<=max;i++,++temp)
// {
//     if(temp % 4 == 0 && temp !=0)
//     {
//         res += temp+" ";
//     }
// }
// alert(res)


// var min = +prompt("number");
// var check = true;

// for(i=2; i<min; ++i)
// {
//     if(min % i == 0)
//     {
//         alert("sostavne number");
//         check=false;
//         break;
//     }
// }
// if(check==true)
// alert("simple")


// // Цикл for от 1 до 9, с шагом 1
// for (var i=1; i<=9; i++)
// {
// //Если число чётное, то пропускаем итерацию,
// //т.е. остаток от деления на 2 равен 0
// if (i%2==0) continue;
// //Выводим числа на экран
// document.write(i+"<br>");
// }


// for (var count = 1; count < 3; count++) {
//     document.write(count + ". Строка цикла<br>");
//     for (var nestcount = 1; nestcount< 3; nestcount++) {
//     document.write("Строка вложенного цикла<br>");
//     }
//     }

var n = 10;
var s;
document.write("<table>");

for(i=1;i<=n;i=i+1)
{document.write("<tr>")

        for (j=1;j<=n;j=j+1)
    {
        st=(i+j)%2
        if(st==0)s="class='r1'";
        else s="class='r2'";
        document.write("<td "+s+"></td>");
    }
    document.write("</tr>")
}
document.write("</table>");