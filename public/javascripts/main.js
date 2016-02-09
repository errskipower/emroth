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

});
