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






                 