var imgList = document.querySelectorAll('.image');
var modal = document.querySelector('.modal');
var modalImage = document.querySelector('.modal-image');
var closeBtn = document.querySelector('.close-btn');

// Getting Images
imgList.forEach(function (image) {
  // Events on Images to open Modal
  image.addEventListener('click', function () {
    modal.style.display = "block";
    modalImage.innerHTML = image.innerHTML
    // Event on Escape to close Modal
    window.addEventListener('keydown', function (e) {
      if (e.key == "Escape") {
      closeModal();
      }
    })
  })
}) 

// Event on Beside Image to close Modal
modal.addEventListener('click', function () {
  closeModal();
})

// Event on Image to stop for closing a Modal
modalImage.addEventListener('click', function (e) {
  e.stopPropagation();
})

// Event on button to close a Modal
closeBtn.addEventListener('click', function () {
  closeModal();
})

// function for Closing a modal
function closeModal() {
  modal.style.display = "none";
}