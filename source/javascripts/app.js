$(document).foundation();

$('.megamenu').mouseenter(function(){
  if($(window).width()>641){
    $('.dropdown-wrapper').offset({left: 0});
    $('.dropdown-wrapper').css('width',$(window).width());
  }else{
    $('.dropdown-wrapper').css('width',auto);
  }
});


$('.lines-button').click(function(){
    $(this).toggleClass('close');
});
$('.exit-off-canvas').click(function(){
    $('#startupButton').removeClass('close');
});
