window.onload = () => {
    // const h1 = document.querySelector("h1");
    // h1.textContent = "New Text 1";

    const h1FromJquery = $("section > h1 > span");
    h1FromJquery.text('TEXT')
    // const h1FromJqueryid = $("#h1");
     // new Array(h2Collection).forEach((el) => (el.textContent = "Upd txt"));
    const h2Collection = $("h2");
    h1FromJquery.textContent = "New Text 2";

   

    [...h2Collection].forEach((el) => (el.textContent = "Upd txt"))
    console.log([1,2,3,4], h2Collection);

    $(".h2").text("super new text");

    // $("button").click(function() {
    //     $(this).hide();
    // });

    $("button").dblclick(function () {
        alert("Clicked");
    });

    $("body").mousemove((e) => {
        $("h1").offset({left: e.pageX / 10, top: e.pageY / 10});
    })

    $("h1").text("XXXXXX").fadeOut(1000).fadeIn(1000);

    

};



window.onload = () => {};
window.addEventListener("load", () => {}); // [events]