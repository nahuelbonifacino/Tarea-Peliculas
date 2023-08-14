fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((movie) => {

      let div = document.createElement("div");
      div.classList.add("seccion-1");

      let img = document.createElement("img");
      img.src = movie.image;
     
      
      let div2 = document.createElement("div");
      div2.classList.add("hover");

      let h1 = document.createElement("h1");
      h1.innerHTML = movie.titulo

   

      div2.appendChild(h1);
      div.appendChild(img);
      div.appendChild(div2);

      document.getElementById("imgA").appendChild(div);
      
    });
  });
