/*
 *
 * Main Javascript
 *
 */

$(document).ready(function() {
  
  /*
   * Mobile Navigation
   */
  var $mobileNavBtn = $('.mobile-nav');
  var $navList = $('.nav-list');
  $mobileNavBtn.on('click', function() {
    // if mobile nav is open
    var isOpen = $navList.is(':visible');

    // animate button change from lines to X
    $mobileNavBtn.children('.fa')
      .animate({  borderSpacing: -180 }, {
        step: function(now, fx) {
          $(this).css('-webkit-transform', 'rotate(' + now + 'deg)'); 
          $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
          $(this).css('transform', 'rotate(' + now + 'deg)');
        },
        duration: 300
      }, 'linear')
      .toggleClass('fa-bars').toggleClass('fa-times');

    // slide effect
    if (isOpen) {
      // animate hide nav
      $navList.animate({
        'right': '-40%'
      }, {
        duration: 400, 
        complete: function() {
          $(this).toggleClass('visible');
          // change button to white text
          $mobileNavBtn.toggleClass('white-text');
        }
      });
    } else {
      // change button to white text
      $mobileNavBtn.toggleClass('white-text');
      // show nav
      $navList.toggleClass('visible').animate({'right': '0'}, 400);
    }
  });

  // initialize wow plugin
  new WOW().init();

  // check if user is using IE 9
  function msieversion() {
    var ua   = window.navigator.userAgent
      , msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {      // If Internet Explorer, return version number
      if (parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))) <= 9) {
        return true;
      }
    } else {
      return false;
    }
  }

  if (msieversion() && window.location.pathname !== '/updatebrowser') {
    window.location.href = '/updatebrowser';
  }

});
