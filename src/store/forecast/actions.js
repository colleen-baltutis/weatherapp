import * as types from './actionTypes';
import weatherService from '../../services/weather';

export function fetchForecast() {
  return async(dispatch, getState) => {
    try {
      const weatherForecast = await weatherService.getWeatherForecast();
      dispatch({ type: types.FORECAST_FETCHED, weatherForecast });
    } catch (error) {
      console.error(error);
    }
  };
}
