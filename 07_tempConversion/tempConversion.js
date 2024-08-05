const convertToCelsius = function(temperatureFahrenheit) {
  const temperatureCelsius = (temperatureFahrenheit - 32) * (5/9);
  return Math.round(temperatureCelsius * 10)/10;
};

const convertToFahrenheit = function(temperatureCelsius) {
  const temperatureFahrenheit = (temperatureCelsius  * (9/5) + 32);
  return Math.round(temperatureFahrenheit * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
