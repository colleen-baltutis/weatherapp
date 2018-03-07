import fastXmlParser from 'fast-xml-parser';
import getAlerts from '../helpers/getAlerts';
import { WEATHER_ENDPOINT, DEGREE_SYMBOL } from '../constants/constants';

const XML_PARSE_OPTIONS = {
    attributeNamePrefix : "@_",
    ignoreAttributes : false,
    ignoreNameSpace : false,
    parseNodeValue : true,
    parseAttributeValue : false,
    trimValues: true
};

class WeatherService {

  async getWeatherForecast() {
    const url = `${WEATHER_ENDPOINT}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'text/xml'
      }
    });
    if (!response.ok) {
      throw new Error(`WeatherService getWeatherForecast failed with HTTP status ${response.status}`);
    }
    const data = await response.text();

    // parse XML, get query/results/channel/item - title, yweather:condition, yweather:forecast
    const xml = new fastXmlParser.parse(data, XML_PARSE_OPTIONS);

    if (!xml) {
      throw new Error(`WeatherService getWeatherForecast failed, data not returned`);
    }

    return {
      title: xml.query.results.channel.item.title,
      condition: {
        date: xml.query.results.channel.item['yweather:condition']['@_date'],
        temp: xml.query.results.channel.item['yweather:condition']['@_temp'] + DEGREE_SYMBOL,
        text: xml.query.results.channel.item['yweather:condition']['@_text']
      },
      multiDayForecast: xml.query.results.channel.item['yweather:forecast'].map((day) => ({
        date: day['@_date'],
        day: day['@_day'],
        high: day['@_high'] + DEGREE_SYMBOL,
        low: day['@_low'] + DEGREE_SYMBOL,
        text: day['@_text'],
        alerts: getAlerts(day)
      }))
    }
  }
}

export default new WeatherService();
