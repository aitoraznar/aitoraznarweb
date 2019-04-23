/*
*=================================
* Hugo UILite Portfolio v0.8
*=================================
*
* Free version https://uicard.io/products/hugo-uilite
* Pro version https://uicard.io/products/hugo-uilite-pro
* Demo https://demo.uicard.io/hugo-uilite-portfolio-demo/
*
* Coded By UICardio
*
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*
*/


let menuBtn = $("#menuBar");

menuBtn.click(function(){

  $('.hamburger-menu').toggleClass('animate');

  if($(".secondaryMenu").hasClass("active")){
    
    $(".secondaryMenu").removeClass("active");
    setTimeout(function(){
      $(".primaryMenu").addClass("active");
    },400);

    
  } else {
    $(".primaryMenu").removeClass("active");
  
    setTimeout(function(){
      $(".secondaryMenu").addClass("active");
    },350);
  }
});

function detectMobile() {
  return ( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
  );
}

function detectSmallScreen() {
  return window.innerWidth <= 800 && window.innerHeight <= 600;
}

$(function() {
  var elements = $(".sidebar > .main-info *");

  for(let i = 0; i < elements.length; i++){
    setTimeout(function(){
      $(elements[i].tagName).addClass("bs");
    }, (400 * i) - 90 * i );
  }

  setTimeout(function(){
    $(".main-content").addClass("active");
  }, 1900);

  //Blockquote
  $('blockquote').prepend($('<i class="fas fa-quote-left fa-2x mr-2"></i>'));

  //Activate terminal
  if (window.TerminalCommands) {
    let terminal = TerminalCommands($('#term_container'));
  }

});