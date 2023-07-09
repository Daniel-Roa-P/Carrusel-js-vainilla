let slideIndex = 0;

function fillData () {

    controlIndex();

    let elemento = document.getElementById('contenedorImagen');

    let innerDiv = document.createElement('div');
    innerDiv.className = 'mySlides fade';

    let numberDiv = document.createElement('div');
    numberDiv.className = 'numbertext';
    numberDiv.textContent = " " + (slideIndex + 1) + " / " + productos.length;

    let image = document.createElement('img');
    image.className = 'image';
    image.src = productos[slideIndex].urlImage;

    let caption = document.getElementById('nombre');
    let parrafo = document.createElement('p');
    let content = document.createTextNode(productos[slideIndex].nombre_producto);
    parrafo.appendChild(content);
    caption.appendChild(parrafo);

    innerDiv.appendChild(numberDiv);
    innerDiv.appendChild(image);
   
    elemento.appendChild(innerDiv);

}

function clearContainer(){

    let e = document.getElementById('contenedorImagen');
    var first = e.firstElementChild;
    while (first) {
        first.remove();
        first = e.firstElementChild;
    }

    let caption = document.getElementById('nombre');
    let texto = caption.firstElementChild;
    texto.remove();

}

function plusSlides() {

    loading();
    slideIndex = 1 + slideIndex;
    

}

function minusSlides() {

    loading();
    slideIndex = slideIndex - 1;

}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function controlIndex(){

    if (slideIndex >= productos.length) {slideIndex = 0}    
    if (slideIndex < 0) {slideIndex = productos.length - 1}

}

function loading(){

    let loader = document.getElementById("loader-container");
    loader.style.display = "block";
    setTimeout(() => {
        loader.style.display = "none";
        clearContainer();
        fillData ();
      }, 3000);

}

function getSlideIndex(){

    return slideIndex;

} 
