/**
 * Nanobar
 *
 * A progress bar for Yuehu.
 */

function Nanobar(parent) {
  parent = parent || document.body;
  var el = document.createElement('div');
  el.className = 'nanobar';
  var bar = document.createElement('div');
  bar.className = 'nanobar-progress';
  el.appendChild(bar);
  this.el = el;
  this.bar = bar;
  parent.appendChild(this.el);
}

Nanobar.prototype.update = function(n) {
  var bar = this.bar;
  bar.className = 'nanobar-progress';
  bar.style.width = (n * 100) + '%';

  if (n >= 1) {
    bar.style.height = '0';
  } else {
    bar.style.height = '100%';
  }
};

Nanobar.prototype.dismiss = function() {
  var me = this;
  me.update(0.1);
  setTimeout(function() {
    document.body.removeChild(me.el);
  }, 300);
};

Nanobar.prototype.infinite = function() {
  this.update(0);
  var bar = this.bar;
  bar.style.width = '0';
  bar.style.height = '100%';
  bar.className = 'nanobar-progress nanobar-progress-infinite';
};

module.exports = Nanobar;
