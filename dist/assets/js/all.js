"use strict";

$(document).ready(function () {
  console.log('Hello Bootstrap4');
}); // $('[data-toggle="offcanvas"]').on('click', function () {
//   $('.offcanvas-collapse').toggleClass('open')
// })

$('.offcanvas').on('click', function (e) {
  e.preventDefault();
  $('body').addClass('open');
});
$('.arrow-left').on('click', function (e) {
  e.preventDefault();
  $('body').removeClass('open');
});
$('#orderCollapse').on('click', function (e) {
  e.preventDefault();
  $(this).find('.arrow').toggleClass("upsideDown"); //用toggle偵測有沒有arrow-up的class去操控箭頭方向

  $(this).find('.text-block').toggle();
});
$('#infoCollapseOne').on('click', function (e) {
  e.preventDefault();
  $(this).find('.arrow').toggleClass("upsideDown"); //用toggle偵測有沒有arrow-up的class去操控箭頭方向

  $(this).find('.text-block').toggle();
});
$('#infoCollapseTwo').on('click', function (e) {
  e.preventDefault();
  $(this).find('.arrow').toggleClass("upsideDown"); //用toggle偵測有沒有arrow-up的class去操控箭頭方向

  $(this).find('.text-block').toggle();
});
$('.cartShow').on('click', function (e) {
  e.preventDefault();
  $('body').removeClass('open');
  $('#cartModal').modal('show');
  $('#cartModal').modal('hide');
});
//# sourceMappingURL=all.js.map
