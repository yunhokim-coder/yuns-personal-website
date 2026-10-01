// Home page game: show the title-screen image first; Play loads the game in place,
// where it opens on its own language picker (Korean / English).
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    var frame = document.querySelector('.home-game-frame');
    if (!frame) return;
    var poster = frame.querySelector('.home-game-poster');
    var full = document.querySelector('.home-game-full');

    poster.addEventListener('click', function () {
      var iframe = document.createElement('iframe');
      iframe.src = frame.getAttribute('data-game-src');
      iframe.title = 'I’m on the Next Level in Education (web game)';
      iframe.allow = 'autoplay; fullscreen';
      iframe.setAttribute('allowfullscreen', '');
      frame.classList.add('is-playing');
      poster.replaceWith(iframe);
      iframe.focus();
      if (full && frame.requestFullscreen) full.hidden = false;
    });

    if (full) {
      full.addEventListener('click', function () {
        if (frame.requestFullscreen) frame.requestFullscreen();
      });
    }
  });
})();
