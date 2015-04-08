$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
    {'left': '1020px'},
    500,
    function() {
    $(this).hide();
    $(this).css('left', '520px');
    });
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });
 
  var KEYS = { x: 88 };
  var ryu = $( '.ryu' );
  $(document)
  .on( 'keydown', function( event ) {
    if ( event.keyCode === KEYS.x ) {
      ryu.addClass( 'ryu-cool' );
    }
  })
  .on( 'keyup', function() {
    ryu.removeClass( 'ryu-cool' );
  });

});
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}