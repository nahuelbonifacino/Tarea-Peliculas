const url = "./data.json";

async function fetchMovies() {
  const response = await fetch(url);
  // waits until the request completes...
  const data = await response.json();
  for (const movie of data) {
    let div = document.createElement("div");
    let div2 = document.createElement("div");
    let img = document.createElement("img");
    let h1 = document.createElement("h1");

    div.classList.add("seccion-1");
    div2.classList.add("hover");
    img.src = movie.image;
    h1.innerHTML = movie.titulo;

    div2.appendChild(h1);
    div.appendChild(img);
    div.appendChild(div2);

    document.getElementById("imgA").appendChild(div);
  }
}
fetchMovies();
