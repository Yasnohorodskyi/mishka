const productButton = document.querySelectorAll('.product__order-button-click');
const modalPopup = document.querySelector('.modal');

for(let i = 0; i < productButton.length; i++ ) {
  productButton[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    modalPopup.classList.add("modal__overlay");
  })
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalPopup.classList.contains("modal__overlay")) {
      evt.preventDefault();
      modalPopup.classList.remove("modal__overlay");
    }
  }
});
