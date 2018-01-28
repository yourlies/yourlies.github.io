(function () {
  'use strict';
  var rafId;

  var Rain = function () {
    this.vx = 0;
    this.vy = 0;
    this.rotate = 60;
    this.top = 0;
    this.left = 0;
    this.width = 100;
    this.raindrop = document.createElement('div');
    this.raindrop.className = 'raindrop';
  }

  Rain.prototype.appear = function () {
    this.vx = Math.random() * 5 + 5;
    this.vy = Math.random() * 5 + 20;
    this.top = Math.random() * 10 + 10;
    this.left = Math.random() * 900;
    document.body.appendChild(this.raindrop);
  }

  Rain.prototype.render = function () {
    this.vy = this.vy + 1 / 6;
    this.vx = this.vy / 2;
    this.top = this.vy + this.top;
    this.left = this.vx + this.left;
  }

  Rain.prototype.update = function () {
    this.raindrop.style.transform = `rotate(${this.rotate}deg)`;
    this.raindrop.style.top = `${this.top}px`;
    this.raindrop.style.left = `${this.left}px`;
    this.raindrop.style.width = `${this.width}px`;
  }

  Rain.prototype.disappear = function () {
    this.raindrop.parentNode.removeChild(this.raindrop);
  }

  setInterval(() => {
    var raindrop = new Rain;
    raindrop.appear();
    var rainy = function () {
      raindrop.render();
      raindrop.update();
      rafId = requestAnimationFrame(rainy);
      if (raindrop.top >= 600) {
        raindrop.disappear();
        cancelAnimationFrame(rafId);
      }
    }
    rafId = requestAnimationFrame(rainy);
  }, 200);
})();