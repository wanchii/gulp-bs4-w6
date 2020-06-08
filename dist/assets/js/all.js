"use strict";

$(document).ready(function () {
  console.log('Hello Bootstrap4');
}); // $('[data-toggle="offcanvas"]').on('click', function () {
//   $('.offcanvas-collapse').toggleClass('open')
// })

$('.offcanvas').on('click', function (e) {
  e.preventDefault(); //取消#錨點

  $('body').addClass('open');
});
$(".arrow-left").click(function (e) {
  e.preventDefault(); //取消#錨點

  $('body').removeClass('open');
});
$("#orderCollapse").click(function (e) {
  e.preventDefault(); //取消#錨點

  $(this).find('.arrow').toggleClass("upsideDown"); //用toggle偵測有沒有arrow-up的class去操控箭頭方向

  $(this).find('.text-block').toggle();
});
$("#infoCollapseOne").click(function (e) {
  e.preventDefault(); //取消#錨點

  $(this).find('.arrow').toggleClass("upsideDown"); //用toggle偵測有沒有arrow-up的class去操控箭頭方向

  $(this).find('.text-block').toggle();
});
$("#infoCollapseTwo").click(function (e) {
  e.preventDefault(); //取消#錨點

  $(this).find('.arrow').toggleClass("upsideDown"); //用toggle偵測有沒有arrow-up的class去操控箭頭方向

  $(this).find('.text-block').toggle();
});
//# sourceMappingURL=all.js.map
