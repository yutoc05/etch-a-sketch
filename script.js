const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.style.width = "calc(100% / 16)";
  div.style.aspectRatio = "1";
  container.append(div);
}

container.addEventListener("mouseover", (e) => {
  e.target.classList.add("hovering");
});
container.addEventListener("mouseout", (e) => {
  e.target.classList.remove("hovering");
});
