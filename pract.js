window.onload = () => {
  let counter = 0;
  $("#counter").text(counter);

  $("#plus-btn").click(function () {
    counter++;
    $("#counter").text(counter);
  });

  $("#minus-btn").click(function () {
    counter--;
    $("#counter").text(counter);
  });

//   let words = $('#text').text().split(' '); 
//   let currentIndex = words.length - 1; 
//   $('#delete-word-btn').click(() => {
//     if (currentIndex >= 0) { 
//       words = words.slice(0, currentIndex).concat(words.slice(currentIndex + 1)); 
//       currentIndex--; 
//       $('#text').text(words.join(' ')); 
//     }
//   });

let words = $('#text-span').text().split(' '); 
let currentIndex = words.length - 1; 


$('#delete-word-btn').click(() => {
  if (currentIndex >= 0) { 
    words.splice(currentIndex, 1);
    currentIndex--; 
    $('#text-span').text(words.join(' ')); 
  }
});


// let textEl = $("#text-span");

// $("#delete-word-btn").click(() => {
//     console.log(textEl.text())
//     const arrayTextContent = textEl.text().split(" ");
//     textEl.text(textEl.text().split(" ").slice(0, arrayTextContent.lenght - 1).join(" "));
// })
// };

