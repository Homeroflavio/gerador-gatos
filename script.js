let contador = 0;

function gerarGato(){

  const galeria = document.getElementById("galeria");

  const img = document.createElement("img");

  img.src = "https://cataas.com/cat?" + new Date().getTime();
  img.classList.add("gato");

  img.loading = "lazy"; // ✅ AQUI

  galeria.appendChild(img);

  contador++;

  document.getElementById("contador").innerText =
  "Gatinhos gerados: " + contador;

  img.scrollIntoView({behavior:"smooth"});

  if (navigator.vibrate) {
    navigator.vibrate(100);
  }
}

function limparGatos(){

  document.getElementById("galeria").innerHTML = "";

  contador = 0;

  document.getElementById("contador").innerText =
  "Gatinhos gerados: 0";
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

