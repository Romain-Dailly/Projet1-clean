function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
  }
  
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(modalId, n) {
    showSlides(modalId, slideIndex += n);
  }
  
  function currentSlide(modalId, n) {
    showSlides(modalId, slideIndex = n);
  }
  
  function showSlides(modalId, n) {
    var i;
    var modal = document.getElementById(modalId);
    var slides = modal.getElementsByClassName("mySlides");
    var dots = modal.getElementsByClassName("demo");
    var captionText = modal.getElementsByClassName("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }