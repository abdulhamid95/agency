window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("navbar").classList.add("noTransparrent")
  } else {
    document.getElementById("navbar").classList.remove("noTransparrent")
  }
}