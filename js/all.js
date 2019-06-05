$(document).ready(function () {
   // 回到頂端
   $('.top-btn').click(function () {
      $('html,body').animate({ scrollTop: 0 }, 333);
   });  

   // 客服
   $('.service_helper').click(function (event) {
         /* Act on the event */
         event.preventDefault();
         $('.helper').slideToggle();
         
   });


});
// 移除按鈕
function bagRemove(event){
   event.preventDefault();
   trashcan = event.parentNode.parentNode;
   trashcan.remove();
}