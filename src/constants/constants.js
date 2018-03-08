export const WEATHER_ENDPOINT = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20%28select%20woeid%20from%20geo.places%281%29%20where%20text%3D%22Chicago%22%29&amp;format=json&amp;env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
export const DEGREE_SYMBOL = 'F';

// Codes retrieved from https://developer.yahoo.com/weather/documentation.html
// Some liberties taken with categorization
export const WEATHER_ALERTS = [
  { name: 'RAIN', type: 'WEATHER', codes: ['1', '2', '9', '11', '12', '39', '40'], text: 'Rain is forecasted for this day' },
  { name: 'THUNDERSTORMS', type: 'WEATHER', codes: ['3', '4', '37', '38', '45', '47'], text: 'Thunderstorms are forecasted for this day' },
  { name: 'SNOW', type: 'WEATHER', codes: ['5', '13', '14', '15', '16', '41', '42', '43', '46'], text: 'Snow is forecasted for this day' },
  { name: 'ICE', type: 'WEATHER', codes: ['6', '7', '8', '10', '17', '18', '35'], text: 'Ice is forecasted for this day' },
  { name: 'HEAT', type: 'TEMPERATURE', threshold: 85, text: 'High heat is forecasted for this day' },
  { name: 'COLD', type: 'TEMPERATURE', threshold: 32, text: 'Freezing temperatures are forecasted for this day' }
];
