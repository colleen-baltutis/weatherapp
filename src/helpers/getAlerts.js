import { WEATHER_ALERTS } from '../constants/constants';

function getAlerts(day) {
  return WEATHER_ALERTS.map((alert) => {
    if ((alert.type === 'WEATHER' && alert.codes.includes(day['@_code']))
      || (alert.name === 'HEAT' && day['@_high'] > alert.threshold)
      || (alert.name === 'COLD' && day['@_low'] < alert.threshold))
      return {name: alert.name, text: alert.text};
  }).filter(alert => alert);
}

export default getAlerts;
