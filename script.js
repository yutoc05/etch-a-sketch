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
  e.target.classList.add("hovering");
});
container.addEventListener("mouseout", (e) => {
  e.target.classList.remove("hovering");
});
button.addEventListener("click", () => {
  let sideLength;
  while (true) {
    sideLength = +prompt("How many squares per side should the new grid have?");
    if (sideLength >= 1 && sideLength <= 100) break;
  }
  generateGrid(sideLength);
});
