//ON SCROLL NAV BAR
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
    document.getElementById("navbar").style.background = "#ffffff";
  } else {
   
    document.getElementById("navbar").style.background = "none";
  }
}







               