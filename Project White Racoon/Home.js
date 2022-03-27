function reveal() {

  var targets = document.querySelectorAll('.reveal');
  var trigger = 200;

  for (var i = 0; i < targets.length; i++) {

    var portHeight = window.innerHeight;
    var distTop = targets[i].getBoundingClientRect().top;

    if (distTop < portHeight - trigger) {

      targets[i].classList.add('activate');

    } else {

      targets[i].classList.remove('activate');

    }

  }

}

window.addEventListener('scroll', reveal);

reveal();
