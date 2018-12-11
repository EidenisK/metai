var cTitle;
var titles;
var color = "#51ba43"

$(document).ready (function() {
  $(window).scroll(function() {
    if($(this).scrollTop() > 50) {
        $('.navbar').addClass(' transparent');
    } else {
        $('.navbar').removeClass(' transparent');
    }
  });
  cTitle = -1;
  titles = document.getElementsByClassName("pamokymai-title");
  nextTitle();
});


function nextTitle() {
  if(cTitle === -1) {
    cTitle++;
    titles[cTitle].style.color = color;
    document.getElementById("book-icon").style.color = "";
    setTimeout(nextTitle, 100);
  }
  else if(cTitle +1 < titles.length) {
    titles[cTitle].style.color = "";
    cTitle++;
    titles[cTitle].style.color = color;
    setTimeout(nextTitle, 100);
  } else {
    document.getElementById("book-icon").style.color = color;
    titles[cTitle].style.color = "";
    cTitle = -1;
    setTimeout(nextTitle, 1000);
  }
}

$('.navLink').on('click', function(){
    $('.navbar-collapse').collapse('hide');
    var href = $(this).attr("href");
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, 500);
    return false;
});

$('.pamokymai-link').on('click', function(){
    //$('.navbar-collapse').collapse('hide');
    var href = $(this).attr("href");
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, 500);
    return false;
});

$('#book-icon').on('click', function() {
  var x = Math.floor( Math.random() * (titles.length -1));
  var links = document.getElementsByClassName("pamokymai-link");
  var href = $(links[x]).attr("href");
  $('html, body').animate({
    scrollTop: $(href).offset().top
  }, 500);
  return false;
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";
  } else {
      document.getElementById("myBtn").style.display = "none";
  }
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    //document.body.scrollTop = 0; // For Safari
    //document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    $('html, body').animate({
      scrollTop: $('body').offset().top
    }, 500);
}
