const hover = document.querySelector(".hoverMouse");
const btn = document.querySelector(".btn");
const board = document.querySelector(".board");
const reset = document.querySelector(".btn-info");

let rows = 15;
let color = "red";

function populate(rows) {
  let grid = rows * rows;
  const board = document.querySelector(".board");
  const size = 480;
  board.style.width = size + "px";
  board.style.height = size + "px";

  for (let i = 0; i < grid; i++) {
    const div2 = document.createElement("div");
    div2.addEventListener("mouseover", colorDivs);
    board.appendChild(div2);
    div2.style.width = size / rows + "px";
    div2.style.height = size / rows + "px";
  }
}
populate(rows);

function colorDivs(e) {
  if (color === "random") {
    e.target.style.backgroundColor = `hsl(${Math.random() * 360} 100% 50%)`;
  } else {
    e.target.style.backgroundColor = color;
  }
}
function changeColor(choice) {
  color = choice;
}

btn.addEventListener("click", (e) => {
  let input = document.getElementById("numInput");
  // remove children div
  if (!input.value) {
    console.log("no input");
  } else {
    board.replaceChildren();
    populate(input.value);
  }
});

reset.addEventListener("click", (e) => {
  board.replaceChildren();
  populate(rows);
});
