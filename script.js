const url = "./data.json";

async function fetchMovies() {
  const response = await fetch(url);
  const data = await response.json();

  for (const movie of data) {
    let div = document.createElement("div");
    let div2 = document.createElement("div");
    let img = document.createElement("img");
    let titulo = document.createElement("h1");
    let anio= document.createElement("h1");
    let director= document.createElement("h1");

    
    div.classList.add("seccion-1");
    div2.classList.add("hover");
    img.src = movie.image;
    titulo.innerHTML = movie.titulo;
    anio.innerHTML = movie.año;
    director.innerHTML = movie.director

    div2.appendChild(titulo);
    div2.appendChild(anio);
    div2.appendChild(director);

    div.appendChild(img);
    div.appendChild(div2);

    document.getElementById("imgA").appendChild(div);
  }
}
fetchMovies();
