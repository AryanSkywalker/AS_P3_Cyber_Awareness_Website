const field = document.getElementById('passcode');
const sub = document.getElementById('check');
var green = '#44BBA4';
var blank = '#E7E5DF';

field.addEventListener('input', analyse);
sub.addEventListener('click', check);
window.addEventListener('scroll', reveal);

reveal();


function analyse() {

  var code = document.getElementById('passcode').value;
  document.querySelector('.message').firstChild.innerHTML = 'Strongness: ...';
  document.querySelector('.message').firstChild.style.color = '#E7E5DF';
  //console.log(code);

  var length = 0, hasLower = false, hasUpper = false, hasNum = false, hasSymbol = false, lower = 0, upper = 0, num = 0, symbol = 0;
  var i = 0;

  length = code.length;

  while (i <= (length-1)) {

    l = code.charAt(i);
    //console.log('Test on ' + l + ' ' + i);

    if (!isNaN(l * 1)) {

      hasNum = true;
      num++;
      //console.log('a');

    } else {

      if (l.toUpperCase() === l && l !== l.toLowerCase()) {

        hasUpper = true;
        upper++;
        //console.log('b');

      }

      if (l.toLowerCase() === l && l !== l.toUpperCase()) {

        hasLower = true;
        lower++;
        //console.log('c');

      }

    }

    //console.log(String(upper) + ' ' + String(lower) + ' ' + String(num) + ' ' + String(length != (upper + lower + num)));

    i++;

    //console.log(String(length) + String(hasLower) + String(hasUpper) + String(hasNum) + String(hasSymbol));

  }

  if (length != (upper + lower + num)) {

    hasSymbol = true;
    symbol = length - (upper + lower + num);
    //console.log('d');

  }

  //console.log('End ' + String(length) + String(hasLower) + String(hasUpper) + String(hasNum) + String(hasSymbol));
  //console.log(String(length));
  //console.log(String(upper + lower + num));
  //console.log('Upper: ' + String(hasUpper) + ' ' + String(upper));
  //console.log('Lower: ' + String(hasLower) + ' ' + String(lower));
  //console.log('Number: ' + String(hasNum) + ' ' + String(num));
  //console.log('Symbol: ' + String(hasSymbol) + ' ' + String(symbol));
  //console.log('\n\n\n\n');

  document.getElementById('length').innerHTML = 'Contains: ' + String(length) + ' letters';
  document.getElementById('low').style.color = hasLower ? green : blank;
  document.getElementById('high').style.color = hasUpper ? green : blank;
  document.getElementById('num').style.color = hasNum ? green : blank;
  document.getElementById('symbol').style.color = hasSymbol ? green : blank;

  return [length, hasLower, hasUpper, hasNum, hasSymbol, lower, upper, num, symbol];

}

function check() {

  var a = analyse();
  var verdict = document.querySelector('.message').firstChild;
  //console.log(a);

  var message = '';
  //console.log('Length ' + String(a[0]) + ' Conditions ' + String((a[1] + a[2] + a[3] + a[4])));

  var strong = a[0] >= 20 && (a[1] + a[2] + a[3] + a[4]) == 4;
  var intermediate = a[0] >= 14 && (a[1] + a[2] + a[3] + a[4]) == 4 || a[0] >= 18 && (a[1] + a[2] + a[3] + a[4]) == 3;
  var medium = a[0] >= 10 && (a[1] + a[2] + a[3] + a[4]) >= 2;
  var weak = a[0] >= 5 && (a[1] + a[2] + a[3] + a[4]) >= 1;

  switch (true) {
    case strong:
      verdict.style.color = '#43AA8B';
      message = 'Strong';
      break;
    case intermediate:
      verdict.style.color = '#90BE6D';
      message = 'Intermediate';
      break;
    case medium:
      verdict.style.color = '#F8961E';
      message = 'Medium';
      break;
    case weak:
      verdict.style.color = '#F3722C';
      message = 'Weak';
      break;
    default:
      verdict.style.color = '#F94144';
      message = 'Very Weak';
      break;
  }

  //console.log(message);
  verdict.innerHTML = 'Strongness: ' + message;

}

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
