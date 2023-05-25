const canvas = document.getElementsByTagName("canvas")[0];

const ctx = canvas.getContext("2d");

ctx.rect(150, 5, 50, 50);
ctx.fillRect(100, 100, 40, 40);

ctx.arc(100, 50, 30, 0, 360);
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = "pink";
ctx.moveTo(10, 20);
ctx.lineTo(10, 50);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.moveTo(40, 20);
ctx.lineTo(40, 50);
ctx.stroke();
ctx.closePath();

const words = ["hello", "world", "!!"];

words.forEach((word, i) => {
  ctx.fillText(word, 30, 10 + i * 20);
});

for (let i = 0; i < 10; i++) {
  setInterval(() => {
    ctx.fillRect(10 + i * 10, 10 + i * 10, 10, 10);
  }, 500);
}

ctx.font = "50px";
ctx.fillText("Hello world", 40, 100);

ctx.fill();

// canvasjs lib

window.onload = () => {
  const dataPoints = [
    { y: 100 },
    { y: 300 },
    { y: 50 },
    { y: 500 },
    { y: 200 },
  ];
  console.log(CanvasJS);

  const chart = new CanvasJS.Chart("charts", {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Simple Line Chart",
    },
    data: [{ type: "line", dataPoints}],
    
  });

  chart.render().then(() => console.log("!!!!!"));
};
