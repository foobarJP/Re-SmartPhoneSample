$(function(){

  var $overlay = $('.modal-overlay');
  var $panel = $('.modal');
  var $close = $('.modal-close');
  var $execute = $('.modal-delete');

  $('.message-btn').click(function(e){
    e.preventDefault();
    $overlay.fadeIn();
    $panel.fadeIn();
    setPosition();
    $(this).parent().addClass('target');
  });

  // 向きを変えたときに画面の中央にウィンドウを表示させます。
  $(window).on('resize', function(){
    setPosition();
  });

  // メッセージの削除をします。
  $execute.click(function(){
    $('.target').fadeOut('normal', function(){
      $(this).remove();
      hideModal();
    });
  });

  // 半透明のレイヤーをタップしてモーダルを非表示にします。
  $overlay.click(function(){
    hideModal();
  });

  // 閉じるボタンをタップしてモーダルを非表示にします。
  $close.click(function(e){
    e.preventDefault();
    hideModal();
  });

  // ウィンドウをページ中央に表示させます。
  function setPosition(){
    var panelHeight = $panel.height();
    var windowHeight = $(window).height();
    var adjustPosition = (windowHeight - panelHeight)/2;
    $panel.css("top", adjustPosition);
  }

  // モーダルを非表示にする処理をまとめたもの
  function hideModal() {
    $('.message-list').find('li').removeClass('target');
    $overlay.fadeOut();
    $panel.fadeOut();
  }
});