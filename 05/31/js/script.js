$(function(){
  var $panel = $('.toast-panel');
  $('#ui-button').click(function(){
    $panel.fadeIn();
    var timer = window.setTimeout(function(){
        $panel.fadeOut();
        window.clearTimeout(timer);
      }, 5000);
    });
});