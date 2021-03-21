$(function() {
 $('tabpanel a').on('click', function() {
  let id = $(this).attr('href');
  $('.tabpanel div').hide();
  $('.meaningless').show();
  $('tabpanel').find(id).show();
  $('tabpanel li').removeClass('is-active');
  $(this).parent().addClass('is-active');
 });
});