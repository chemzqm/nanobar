var Nanobar = require('..');
var nanobar = new Nanobar();
nanobar.update(0.1);
(function() {
  var buttons = document.getElementsByTagName('button');
  for (var i = 0; i < buttons.length; i++) {
    (function(button) {
      button.onclick = function() {
        var percent = button.getAttribute('data-percent');
        if (percent) {
          nanobar.update(percent);
        } else {
          nanobar.infinite();
        }
      };
    })(buttons[i]);
  }
})();
