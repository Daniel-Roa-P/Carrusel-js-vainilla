let modal = document.getElementById("myModal");

let detalles = document.getElementById("texto-detalles");

let span = document.getElementsByClassName("close")[0];

detalles.onclick = function() {

  clearInterval(myInterval);

  let tituloModal = document.getElementById("nombre_producto");  
  tituloModal.textContent = productos[getSlideIndex()].nombre_completo;

  let imagenModal = document.getElementById("image_modal");  
  imagenModal.src = productos[getSlideIndex()].urlImage;

  let marca = document.getElementById("marca");  
  marca.textContent = productos[getSlideIndex()].marca;

  let description = document.getElementById("description");  
  description.textContent = productos[getSlideIndex()].description;

  let caracteristicas = productos[getSlideIndex()].caracteristicas.split(';');
  let lista = document.getElementById('lista_caracteristicas');

  while (lista.hasChildNodes()) {
    lista.removeChild(lista.firstChild);
  }

  for(let i = 0; i < caracteristicas.length ; i++){

    let item = document.createElement('li');
    item.textContent = caracteristicas[i];
    lista.appendChild(item);

  }

  let precio = document.getElementById("precio");  
  precio.textContent = productos[getSlideIndex()].precio;

  modal.style.display = "block";

}

span.onclick = function() {
  modal.style.display = "none";
  myInterval = setInterval(fillData, 3000);
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    myInterval = setInterval(fillData, 3000);
  }
}