/*
 *
 * Projects Javascript
 *
 */

$(document).ready(function() {
  var $projectToggle = $('.project-toggle');

  $projectToggle.on('click', function() {
    var $this   = $(this),
        btnHTML = $this.html(),
        $projectDescription = $this.siblings('.project-desc');
    if (btnHTML.indexOf('info') > -1) {
      // change to less
      btnHTML = btnHTML.replace('info', 'less').replace('plus', 'minus');
      $this.addClass('less').removeClass('more');
    } else {
      // change to info
      btnHTML = btnHTML.replace('less', 'info').replace('minus', 'plus')
      $this.addClass('more').removeClass('less');
    }
    $this.html(btnHTML);
    $projectDescription.toggleClass('hidden');
  });

});
