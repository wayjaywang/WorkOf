

$(document).ready(function(){
  $("#slideshow > div:gt(0)").hide();

  setInterval(function() {
      
      $('#slideshow > div:first')
      .fadeOut(2000)
      .next()
      .fadeIn(2000)
      .end()
      .appendTo('#slideshow');
  },  4000);

});

$(function(){
    $('.js-scroll-to-invite').click(function(){
        $('html,body').animate({ scrollTop: $('.signup').offset().top }, 1000);
        $('#email-input-field').focus();
    });
});


$(document).ready(function(){
// show popup when you click on the link
  $('.show-popup').click(function(event){
    event.preventDefault(); // disable normal link function so that it doesn't refresh the page
    $('.overlay-bg').fadeIn(200); //display your popup
    $('body').addClass('stop-scrolling');
  });
   
  // hide popup when user clicks on close button
  $('.close-btn').click(function(){
    $('.overlay-bg').fadeOut(200);
    $('body').removeClass('stop-scrolling');// hide the overlay
  });
   
  // hides the popup if user clicks anywhere outside the container
  $('.overlay-bg').click(function(){
      $('.overlay-bg').fadeOut(200);
      $('body').removeClass('stop-scrolling');
  });
  // prevents the overlay from closing if user clicks inside the popup overlay
  $('.overlay-content').click(function(){
      return false;
  });
 
});
