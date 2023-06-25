const container = document.querySelector(".container");
const hover = document.getElementById("hoverMouse");

for (let i = 0; i < 256; i++) {
  const div2 = document.createElement("div");
  container.appendChild(div2);
}

hover.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "red";
  
});

