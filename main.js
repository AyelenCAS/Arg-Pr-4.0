const valor = document.getElementById("valor");
const btnIncrementar = document.getElementById("incrementar");

let contador = 0;

btnIncrementar.onclick = function(){

    contador++;

    valor.innerHTML = contador;
}