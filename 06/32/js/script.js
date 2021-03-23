$(function(){
  $('.image').on('load', function(){
    $('.loading').remove();
    $('.image').animate({'opacity': '1'}, 1000);
  })
});