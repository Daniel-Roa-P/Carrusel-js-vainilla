
let modal = document.getElementById("myModal");

let detalles = document.getElementById("texto-detalles");

let span = document.getElementsByClassName("close")[0];

detalles.onclick = function() {
    console.log(getSlideIndex());
    
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}