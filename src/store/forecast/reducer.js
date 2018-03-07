import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const initialState = Immutable({
  weatherForecast: {
    title: '',
    condition: {},
    multiDayForecast: []
  }
});


export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.FORECAST_FETCHED:
      return state.merge({
        weatherForecast: action.weatherForecast
      });
    default:
      return state;
  }
}

export function getForecast(state) {
  return state.forecast.weatherForecast;
}
