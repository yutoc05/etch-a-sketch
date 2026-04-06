const container = document.querySelector(".container");
const button = document.querySelector("button");

function generateGrid(sideLength) {
  container.replaceChildren();
  for (let i = 0; i < sideLength * sideLength; i++) {
    const div = document.createElement("div");
    div.style.width = `calc(100% / ${sideLength})`;
    div.style.aspectRatio = "1";
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    div.style.opacity = "0";
    container.append(div);
  }
}

container.addEventListener("mouseover", (e) => {
  if (e.target === container) return;
  e.target.style.opacity = +e.target.style.opacity + 0.1;
});
button.addEventListener("click", () => {
  let sideLength;
  while (true) {
    sideLength = +prompt("How many squares per side should the new grid have?");
    if (sideLength >= 1 && sideLength <= 100) break;
  }
  generateGrid(sideLength);
});
