const reviews=document.querySelector(".reviews"),reviewsItem=reviews.querySelectorAll(".reviews__item"),arrowPreview=reviews.querySelector(".reviews__arrow-prev"),arrowNext=reviews.querySelector(".reviews__arrow-next");arrowPreview.addEventListener("click",(function(e){e.preventDefault(e);for(let e=0;e<reviewsItem.length;e+=1)if(reviewsItem[e].classList.contains("reviews__item--display")){reviewsItem[e].classList.remove("reviews__item--display"),reviewsItem[e>0?e-1:reviewsItem.length-1].classList.add("reviews__item--display");break}})),arrowNext.addEventListener("click",(function(e){e.preventDefault(e);for(let e=0;e<reviewsItem.length;e+=1)if(reviewsItem[e].classList.contains("reviews__item--display")){reviewsItem[e].classList.remove("reviews__item--display"),reviewsItem[e<reviewsItem.length-1?e+1:0].classList.add("reviews__item--display");break}}));