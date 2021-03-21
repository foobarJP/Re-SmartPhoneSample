$(function() {
 let $menu = $('.accordion-menu');
 let $panel = $menu.find('ol');
 let $toggle = $menu.find('a');

 $panel.hide();
 
 $toggle.click(function(e) {
  e.preventDefault();
  if($(this).hasClass('is-close')) {
   $(this).parent().next().find('ol').slideDown();
   let $a = $(this);
   $a.removeClass('is-close');
   $a.addClass('is-open');
  } else {
   let $a = $(this);
    $a.parent().next().find('ol').slideUp();
    $a.removeClass('is-open');
    $a.addClass('is-close');
  }
 })

 function exchangeOpenClose(a) {
  if(a.hasClass('is-open')) {
   a.removeClass('is-open');
   a.addClass('is-close');
  } else {
   a.removeClass('is-clse');
   a.addClass('is-open');
  }
 }
});