const board = document.querySelector(".board");
const hover = document.getElementById("hoverMouse");
const userValue = document.querySelector(".userInput");
const reset = document
  .querySelector("#reset")
  .addEventListener("click", createNewGrid);
let grid = 256;

for (let i = 0; i < grid; i++) {
  const div2 = document.createElement("div");
  board.appendChild(div2);
}

hover.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "red";
});

function createNewGrid() {
  let userNo = userValue;

  if (userNo) {
    grid = userNo * userNo;
    div2 = board / userNo;
  }
}
