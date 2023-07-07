let slideIndex = 0;

function fillData () {

    controlIndex();

    let ele = document.getElementById('contenedorImagen');

    let innerDiv = document.createElement('div');
    innerDiv.className = 'mySlides fade';

    let numberDiv = document.createElement('div');
    numberDiv.className = 'numbertext';

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
    //innerDiv.appendChild(caption);

    // The variable iDiv is still good... Just append to it.
    ele.appendChild(innerDiv);

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

    slideIndex = 1 + slideIndex;
    clearContainer();
    fillData ();

}

function minusSlides() {

    slideIndex = slideIndex - 1;
    clearContainer();
    fillData ();

}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function controlIndex(){

    if (slideIndex >= productos.length) {slideIndex = 0}    
    if (slideIndex < 0) {slideIndex = productos.length - 1}

}

