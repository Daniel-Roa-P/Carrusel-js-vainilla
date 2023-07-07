let slideIndex = 1;

function fillData () {

    let ele = document.getElementById('slideshow-container');

    for(let i = 0 ; i<productos.length ; i++){

        let innerDiv = document.createElement('div');
        innerDiv.className = 'mySlides fade';

        let numberDiv = document.createElement('div');
        numberDiv.className = 'numbertext';

        let image = document.createElement('img');
        image.src = productos[i].urlImage;

        let caption = document.createElement('div');
        let content = document.createTextNode(productos[i].nombre_producto);
        caption.appendChild(content);
        caption.className = 'text';

        innerDiv.appendChild(numberDiv);
        innerDiv.appendChild(image);
        innerDiv.appendChild(caption);

        // The variable iDiv is still good... Just append to it.
        ele.appendChild(innerDiv);

    }

    showSlides(slideIndex);

}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
  slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
}
