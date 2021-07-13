// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("navbar").classList.add("noTransparrent")
  } else {
    document.getElementById("navbar").classList.remove("noTransparrent")
  }
}

window.onload = function() {
  var website = new CountUp("website-count", 0, 250, 0, 2.5);
  website.start();
  var app = new CountUp("app-count", 0, 100, 0, 2.5);
  app.start();
  var user = new CountUp("user-count", 0, 10000, 0, 2.5);
  user.start();
  var video = new CountUp("video-count", 0, 50, 0, 2.5);
  video.start();
}

