const URL = "https://randomfox.ca/floof/";

const mainImg = document.querySelector(".container .image-block img");
const btn = document.querySelector(".container .btn");
const history = document.querySelector(".container .history");
const loader = document.querySelector(".container .loader");

async function randomFox() {
  loader.style.opacity = "1";

  btn.classList.add("disabled");

  const res = await fetch(URL);
  const data = await res.json();
  const foxImg = data.image;

  mainImg.setAttribute("src", foxImg);

  const historyImg = document.createElement("img");
  historyImg.setAttribute("src", foxImg);
  history.prepend(historyImg);
}

randomFox();

btn.addEventListener("click", randomFox);

mainImg.addEventListener("load", () => {
  btn.classList.remove("disabled");
  loader.style.opacity = "0";
});

history.addEventListener("click", (e) => {
  // mainImg.src = e.srcElement.src;
  mainImg.setAttribute("src", e.srcElement.src);
});
