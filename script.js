const container = document.querySelector(".container");
const button = document.querySelector("button");

function generateGrid(sideLength) {
  container.replaceChildren();
  for (let i = 0; i < sideLength * sideLength; i++) {
    const div = document.createElement("div");
    div.style.width = `calc(100% / ${sideLength})`;
    div.style.aspectRatio = "1";
    container.append(div);
  }
}

container.addEventListener("mouseover", (e) => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
container.addEventListener("mouseout", (e) => {
  e.target.style.backgroundColor = "";
});
button.addEventListener("click", () => {
  let sideLength;
  while (true) {
    sideLength = +prompt("How many squares per side should the new grid have?");
    if (sideLength >= 1 && sideLength <= 100) break;
  }
  generateGrid(sideLength);
});
