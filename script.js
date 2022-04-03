function alrt(){
    alert ("Sorry registration is unavailable at this time");  
}
function alrt2(){
    var a = document.getElementById("inp").value;
    alert("Thank You "+a+" for subscribing our news letter");
}
$(document).ready(function(){
  $(".col-4").on({
    mouseenter: function(){
      $(this).css("zoom","102%");
    },  
    mouseleave: function(){
      $(this).css("zoom","100%");
    }  
  });
});