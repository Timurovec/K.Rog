$(() => {
  $('a[href*="#"]:not([href="#"])').click((e) => {
    const target = $(e.target.hash);

    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);

      return false;
    }
  });
});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

$('#popup').modal();

function ScrollTo(name) {
  ScrollToResolver(document.getElementById(name));
}

function ScrollToResolver(elem) {
  var jump = parseInt(elem.getBoundingClientRect().top * .2);
  document.body.scrollTop += jump;
  document.documentElement.scrollTop += jump;
  if (!elem.lastjump || elem.lastjump > Math.abs(jump)) {
    elem.lastjump = Math.abs(jump);
    setTimeout(function() { ScrollToResolver(elem);}, "100");
  } else {
    elem.lastjump = null;
  }
}