const convertToCelsius = function(userTemperature) {
    let celsiusTemperature = ((userTemperature - 32)) * (5/9);
    celsiusTemperature = Math.round(celsiusTemperature * 10) / 10;
    return celsiusTemperature
};

const convertToFahrenheit = function(userTemperature) {
    let fahrenheitTemperature = ((userTemperature * (9/5)) + 32);
    fahrenheitTemperature = Math.round(fahrenheitTemperature * 10) / 10;
    return fahrenheitTemperature
  };

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
