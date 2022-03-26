//Navbar OnScroll
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
    document.getElementById("navbar").style.background = "#ffffff";
  } else {
   
    document.getElementById("navbar").style.background = "none";
  }
}
//Recipe Cards Toggle effect
$(document).ready(function(){
    $(".recipeImg").click(function(){
      $(".recipeImg").hide('1000');
      $("#recipeText").show('1500');
    });
    $("#recipeText").click(function(){
      $("#recipeText").slideUp('1500');
      $(".recipeImg").slideDown('1500');
    });
  })
  