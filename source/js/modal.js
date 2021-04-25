const productButtons = document.querySelectorAll('.product__order-button-click');
const modalPopup = document.querySelector('.modal');
const escCode = 27;

productButtons.forEach(productButton => (
  productButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalPopup.classList.add("modal__overlay");
  })
))

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === escCode) {
    if (modalPopup.classList.contains("modal__overlay")) {
      evt.preventDefault();
      modalPopup.classList.remove("modal__overlay");
    }
  }
});
