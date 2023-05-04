window.addEventListener("load", () => {
  const colors = ["red", "green", "black", "pink"];

  $("#color").on("input", function () {
    $("body").css({ background: this.value });
  });

  colors.forEach((color) => {
    $("#main-section").append(`<button>${color}</button>`);
  });

  [...$("#main-section > button")].forEach((button) => {
    $(button).click(() => {
      $("body").css({ background: $(button).text() });
      console.log(button, "button");
    });
  });

  $('#inp-1, #inp-2').on('input', function() {
    let value = $(this).val();
    $('#inp-1, #inp-2').not(this).val(value);
 });


$('#inp-1, #inp-2').on('input', function() {
      let value = $(this).val();
      let index = $('#inp-1, #inp-2').index(this);
      $('#inp-1, #inp-2').eq(index + 1).val(value.substring(0, 1));
   });

   $("#sub-btn").on("click", function() {
    $('#inp-1, #inp-2').val("");
 });
});
