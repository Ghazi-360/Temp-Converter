
document.getElementById("Celsius").oninput = updateFahrenhite;
document.getElementById("Fahrenheit").oninput = updateCelcius;

updateFahrenhite();

function updateFahrenhite(){
    var c = document.getElementById("Celsius").value;
    var f;
    if ( (c == null) || (c == "") || (isNaN(c) ) )
  {
    f = "";
  }
  else
  {
    f = celsiusToFahrenheit(c);
  }
  document.getElementById("Fahrenheit").value = f;
}

function updateCelcius(){
    var f = document.getElementById("Fahrenheit").value;
    var c;
    if ( (f == null) || (f == "") || (isNaN(f) ) )
  {
    c = "";
  }
  else
  {
    c = fahrenheitToCelsius(f);
  }
  document.getElementById("Celsius").value = c;
}

function myround(x) {
    return Math.round(10 * x) / 10;
  }

  function celsiusToFahrenheit(c){
      var answer = c * 9 / 5 + 32;
      return myround(answer);
  }

  function fahrenheitToCelsius(f){
      var answer = (f - 32) * 5 / 9;
      return myround(answer);
  }