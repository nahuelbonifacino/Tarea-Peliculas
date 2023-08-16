const url = "./data.json";

async function fetchMovies() {
  const response = await fetch(url);
  const data = await response.json();

  for (const movie of data) {
    const result = ` 
    <div class="seccion-1">
      <img src=${movie.image}>
      <div class="hover">
        <h1>${movie.titulo}</h1>
        <h1>${movie.año}</h1>
        <h1>${movie.director}</h1>
      </div>
    </div>
    `;

    document.getElementById("imgA").innerHTML += result;
  }
}
fetchMovies();
