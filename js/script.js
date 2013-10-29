

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

  var quotes = new Array();
  quotes[0] = "Connecting the best New York City Makers to Interior Designers";
  quotes[1] = "Connecting Independent Brooklyn Makers to the NYC Design Community ";
  quotes[2] = "We connect New York City Furniture Makers to the local Interior Design Community";
  var rando = quotes[Math.floor( Math.random() * quotes.length )];
  $('.hero-text').text(rando);

});

$(function(){
    $('.js-scroll-to-invite').click(function(){
        $('html,body').animate({ scrollTop: $('.signup').offset().top }, 1000);
        $('#email-input-field').focus();
    });
});

