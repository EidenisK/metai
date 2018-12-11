$(document).ready (function() {
  $(window).scroll(function() {
    if($(this).scrollTop() > 50) {
        $('.navbar').addClass(' transparent');
    } else {
        $('.navbar').removeClass(' transparent');
    }
  });
  laikas();
});

function laikas() {
  var y, m, d, h, min, s;
  var then = moment("1714-01-01 12:00");
  var now = moment();

  y = now.diff(then, 'years');
  then.add(y, "years");

  m = now.diff(then, 'months');
  then.add(m, "months");

  d = now.diff(then, 'days');
  then.add(d, "days");

  h = now.diff(then, 'hours');
  then.add(h, "hours");

  min = now.diff(then, 'minutes');
  then.add(min, "minutes");

  s = now.diff(then, 'seconds');

  text = "";
  if(y != 0)
    text += '<b>' + y + '</b> m., ';
  if(m != 0)
    text += '<b>' + m + '</b> mėn., ';
  if(d != 0)
    text += '<b>' + d + '</b> d., ';
  if(h != 0)
    text += '<b>' + h + '</b> h., ';
  if(min != 0)
    text += '<b>' + min + '</b> min., ';
  if(s != 0)
    text += '<b>' + s + '</b> s.';
  document.getElementById("counter").innerHTML = text;
  window.requestAnimationFrame(laikas);
}
