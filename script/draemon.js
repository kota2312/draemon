$(function() {
 $("#startBtn1").on("click",function() {
   let val = Math.round( Math.random()*100 );
   let src = $("#screen1").val();
   $("#screen1").val(val);
 });
});
