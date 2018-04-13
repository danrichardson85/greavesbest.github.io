document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ "Industrial Design", "Production Engineering", "Design Development", "Design Stratagy"];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // check if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("#typewriter").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 150);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 700);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

$("#fader> img:gt(0)").hide();

setInterval(function() { 
  $('#fader > img:first')
    .fadeOut(2000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('#fader');
},  4000);


// Number Counter ////////////


jQuery(document).ready(function(){
    //create animated stats
    var numbersSection = jQuery(".counterBox");
    if(numbersSection.length){
        var a = 0;
        jQuery(window).scroll(function() {
            var oTop = jQuery('.counterBox').offset().top - window.innerHeight;
            if (a == 0 && jQuery(window).scrollTop() > oTop) {
                jQuery('.count').each(function () {
                    jQuery(this).prop('Counter',0).animate({
                        Counter: jQuery(this).text()
                    }, {
                        duration: 3000,
                        easing: 'swing',
                        step: function (now) {
                            jQuery(this).text(Math.ceil(now));
                        }
                    });
                });
                a = 1;
            }
        });
    }
});

////////////Nav Bar////////////

$(document).ready(function () {
    $(".navBar").before($(".navBar").clone().addClass("animate"));
    $(window).on("scroll", function () {
        $("body").toggleClass("down", ($(window).scrollTop() > 640));
    });
});