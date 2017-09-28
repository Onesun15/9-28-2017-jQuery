// when a user selects one of the thumbnail images using the mouse or keyboard, that image should be displayed in the full size image container at the top. 
// Updating the image should also update its alt attribute. 
// To test keyboard interactivity, you can Tab to one of the thumbnails and press the Enter key.

// listen to event that 'clicks' on thumbnails
// .hero > change img src = thumbnail src
// also replace alt
'use strict';
/* global $ */

$(function(){
  $('.thumbnails').on('click','.thumbnail', function(event){
    let clickedImgSrc = $(event.currentTarget).find('img').attr('src');
    let clickedImgAlt = $(event.currentTarget).find('img').attr('alt');
    // console.log(clickedImgSrc);
    // console.log(clickedImgAlt);
    $('.hero img').attr('src', clickedImgSrc);
    $('.hero img').attr('alt', clickedImgAlt);
  });
}
);