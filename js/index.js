// دالة للتحقق من دخل المستخدم
(function () {

  // إحضار جميع النماذج التي نريد تطبيق التحقق منها
  var forms = document.querySelectorAll('.needs-validation')

  // الاستماع إلى أمر الإرسال والتأكد من الدخل وإضافة صنف التحقق في حال كان صحيحًا
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

// إضافة صنف noTransparrent وحذفه عند النزول إلى الأسفل

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("navbar").classList.add("noTransparrent")
  } else {
    document.getElementById("navbar").classList.remove("noTransparrent")
  }
}


// إضافة العدادات إلى الصفحة في العناصر المحددة
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

