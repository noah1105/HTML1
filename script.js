// .image - container img,
// .image - container a {
//   width: 250px;
//   height: 100px;
//   margin: 10px;
//   display: block;
//   text - align: center;
//   box - sizing: border - box;
// }


// This is a new comment
// document.getElementById("noah") . innerHTML = "my name is Noah!!" 



// This is the new comment

let slideIndex = 1;
showSlides(slideIndex);

function moveSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}  