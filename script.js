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


$(window).scroll(function() {
    var winScrollTop = $(window).scrollTop();
    var winHeight = $(window).height();
    var floaterHeight = $('#floater').outerHeight(true);
    //true so the function takes margins into account
    var fromBottom = 20;

    var top = winScrollTop + winHeight - floaterHeight - fromBottom;
    $('#floater').css({'top': top + 'px'});
});
