$('.faq-qes').on('click',function(){
  $(this).next().slideToggle(300);
  if($(this).hasClass('hidden')){
    $(this).removeClass('hidden');
    $(this).children('span').text('-');
  }else{
    $(this).addClass('hidden');
    $(this).children('span').text('+');
  }
});
// トップに戻るの実装
$('#scrolling').on('click',function(){
  $('html,body').animate({'scrollTop':0},400);
});
// ある程度スクロールされたらTOPに戻るボタンを表示する
$(window).scroll(function(){
  var $toTopButton = $('#scrolling');
  var scrollTop = $(this).scrollTop();
  var windowHeight = $(this).height();
  if(scrollTop > windowHeight){
    $toTopButton.show();
  } else {
    $toTopButton.hide();
  }
});