/*
 *
 * Index Page Javascript
 *
 */

$(document).ready(function() {
  
  /*
   * Recent Work Background Image Animation
   */
  var $recentWorkBkg = $('.recent-work-bkg')
    , backgrounds = [
        'url(../images/work-apollo.jpg)',
        'url(../images/work-stugov.jpg)',
        'url(../images/work-shelby.jpg)',
        'url(../images/work-woven.jpg)'
      ]
    , current = 0;

  function nextBackground() {
    $recentWorkBkg
      .animate({opacity: 0}, 500, function() {
        $(this)
          .css(
            'background-image',
            backgrounds[current = ++current % backgrounds.length]
          )
          .animate({opacity: .1}, 600);
      }
    );
    setTimeout(nextBackground, 5000);
  }

  setTimeout(nextBackground, 6000);

});
