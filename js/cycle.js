var num = Number(prompt('Enter your number'));

function fibonacci(n) {
  var a = 1;
  var b = 1;
  
  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}

document.write(fibonacci(num));