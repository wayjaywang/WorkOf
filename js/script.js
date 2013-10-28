
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
