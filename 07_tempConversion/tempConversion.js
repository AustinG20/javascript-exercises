const convertToCelsius = function(temp) {
  let celcius = 0;

  celcius = (temp - 32) * 5/9;

  celcius = parseFloat(celcius.toFixed(1));

  return celcius;
};

const convertToFahrenheit = function(temp) {
  let fahrenheit = 0;

  fahrenheit = temp * (9/5) + 32;

  fahrenheit = parseFloat(fahrenheit.toFixed(1));

  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
