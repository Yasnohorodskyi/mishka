const reviews = document.querySelector('.reviews');
const reviewsItem = reviews.querySelectorAll('.reviews__item');
const arrowPreview = reviews.querySelector('.reviews__arrow-prev');
const arrowNext = reviews.querySelector('.reviews__arrow-next');

arrowPreview.addEventListener('click', function(evt){
  evt.preventDefault(evt);
  for (let i = 0; i < reviewsItem.length; i = i + 1 ) {
    if(reviewsItem[i].classList.contains('reviews__item--display')) {
      reviewsItem[i].classList.remove('reviews__item--display');
      reviewsItem[i > 0 ? i - 1 : reviewsItem.length -1].classList.add('reviews__item--display');
      break;
    }
  }
})

arrowNext.addEventListener('click', function(evt){
  evt.preventDefault(evt);
  for (let i = 0; i < reviewsItem.length; i = i + 1 ) {
    if(reviewsItem[i].classList.contains('reviews__item--display')) {
      reviewsItem[i].classList.remove('reviews__item--display');
      reviewsItem[i < reviewsItem.length - 1 ? i + 1 : 0].classList.add('reviews__item--display');
      break;
    }
  }
})



