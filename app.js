const hover = document.getElementById("hoverMouse");
const btn = document.querySelector(".btn");
const board = document.querySelector(".board");
const reset = document.querySelector(".btn-info");

let rows = 40;

function populate(rows) {
  let grid = rows * rows;
  const board = document.querySelector(".board");
  const size = 480;
  board.style.width = size + "px";
  board.style.height = size + "px";

  for (let i = 0; i < grid; i++) {
    const div2 = document.createElement("div");
    board.appendChild(div2);
    div2.style.width = size / rows + "px";
    div2.style.height = size / rows + "px";
  }
}

hover.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "red";
});
populate(rows);

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

function randomColor() {
  return Math.floor(Math.random() + 1);
}
