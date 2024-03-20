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

// This is the new comment

function showPhotos() {
  console.log("This is a photo!");

  const outputContainer = document.createElement("div");
  outputContainer.textContent = "This is a photo!";
  document.body.appendChild(outputContainer);
}

const button = document.createElement("button");
button.textContent = "Photos";
button.addEventListener("click", showPhotos);

document.body.appendChild(button);

// This is the new comment

function complexConditionEvaluation(value1, value2, value3) {
  if ((value1 > 5 && value2 < 10) || value3 === "example") {
    console.log("Complex condition met!");
  } else {
    console.log("New update.");
  }
}

complexConditionEvaluation(7, 8, "example");

