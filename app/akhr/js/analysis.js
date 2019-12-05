;(function () {
  var switchBtn = document.getElementById('switch-pic');
  var pics = document.querySelectorAll('.switch-pic img');

  var datasText = document.querySelector('.data-pic .i-text');
  var datas0 = document.querySelectorAll('.data-pic li .i0');
  var datas1 = document.querySelectorAll('.data-pic li .i1');
  var datasNum = datas0.length;
  var className = switchBtn.className;

  var opacity = 1;
  var running = false;
  var pos = 0;
  var move = true;
  var switched = false;

  var ref0 = pics[0];
  var ref1 = pics[1];
  var raf = function () {
  	ref0.style.opacity = opacity;
    ref0.style.marginLeft = pos + 'px';
    ref1.style.marginLeft = -pos + 'px';
  	ref1.style.opacity = 1.1 - opacity;

    if (pos > 23) {
      move = false;
    }
    if (move) {
      pos = pos + 1;
    } else {
      pos = pos - 1;
    }
  	opacity = opacity - .02;
  	if (opacity <= .1) {
      ref1.style.opacity = 1;
      ref1.style.zIndex = 1;
      ref1.style.marginLeft = '';
      ref0.style.opacity = .1;
      ref0.style.zIndex = 0;
      ref0.style.marginLeft = '';

      opacity = 1;
      running = false;
      move = true;
      switchBtn.style.cursor = '';
      var temp = ref0;
      ref0 = ref1;
      ref1 = temp;
  	} else {
  	  requestAnimationFrame(raf);
  	}
  }
  switchBtn.onclick = function () {
    if (running) {
      return false;
    }
    switched = !switched;
    for (var i = 0; i < datasNum; i++) {
      var d0 = datas0[i];
      var d1 = datas1[i];
      d0.style.display = 'inline-block';
      d1.style.display = 'inline-block';
      switched
        ? (d0.style.display = 'none')
        : (d1.style.display = 'none');
      switched
        ? (datasText.innerHTML = '满级以上/精二')
        : (datasText.innerHTML = '满级以上/精一'); 
    }
    running = true;
    switchBtn.style.cursor = 'not-allowed';
    if (switched) {
      switchBtn.innerHTML = '精二立绘';
    } else {
      switchBtn.innerHTML = '精一立绘';
    }
    requestAnimationFrame(raf);
  }
})();

;(function () {
  var switchSkill = document.querySelectorAll('.switch-skill');
  var addClassname = function (refs, className) {
    for (var i = 0; i < refs.length; i++) {
      var ref = refs[i];
      ref.className = ref.className + ' ' + className;
    }
  }
  var delClassname = function (refs, className) {
    for (var i = 0; i < refs.length; i++) {
      var ref = refs[i];
      ref.className = ref.className.replace(className, '');
    }
  }
  for (var i = 0; i < switchSkill.length; i++) {
    ;(function (i) {
      var btn = switchSkill[i];
      var isSwitch = false;
      btn.onclick = function (e) {
        i0 = e.target.parentNode.parentNode.querySelectorAll('.i0');
        i1 = e.target.parentNode.parentNode.querySelectorAll('.i1');
        if (!isSwitch) {
          isSwitch = true;
          btn.innerHTML = '专精三';
          addClassname(i0, 'dn');
          delClassname(i1, 'dn');          
        } else {
          isSwitch = false;
          btn.innerHTML = '七级技能';
          addClassname(i1, 'dn');
          delClassname(i0, 'dn');
        }
      }
    })(i);
  }
})();