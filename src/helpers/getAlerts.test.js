import _ from 'lodash';
import getAlerts from './getAlerts';
import { WEATHER_ALERTS } from '../constants/constants';

const rain = _.find(WEATHER_ALERTS, {name: 'RAIN'});
const thunderstorms = _.find(WEATHER_ALERTS, {name: 'THUNDERSTORMS'});
const snow = _.find(WEATHER_ALERTS, {name: 'SNOW'});
const ice = _.find(WEATHER_ALERTS, {name: 'ICE'});
const heat = _.find(WEATHER_ALERTS, {name: 'HEAT'});
const cold = _.find(WEATHER_ALERTS, {name: 'COLD'});

test('Should have no alerts', () => {
  let day = {['@_code']: null, ['@_high']: heat.threshold, ['@_low']: cold.threshold};
  expect(getAlerts(day)).toEqual([]);
});

test('Should have rain alert', () => {
  let day = {['@_code']: _.sample(rain.codes), ['@_high']: heat.threshold, ['@_low']: cold.threshold};
  expect(getAlerts(day)).toEqual([{name: rain.name, text: rain.text}]);
});

test('Should have thunderstorm alert', () => {
  let day = {['@_code']: _.sample(thunderstorms.codes), ['@_high']: heat.threshold, ['@_low']: cold.threshold};
  expect(getAlerts(day)).toEqual([{name: thunderstorms.name, text: thunderstorms.text}]);
});

test('Should have snow alert', () => {
  let day = {['@_code']: _.sample(snow.codes), ['@_high']: heat.threshold, ['@_low']: cold.threshold};
  expect(getAlerts(day)).toEqual([{name: snow.name, text: snow.text}]);
});

test('Should have ice alert', () => {
  let day = {['@_code']: _.sample(ice.codes), ['@_high']: heat.threshold, ['@_low']: cold.threshold};
  expect(getAlerts(day)).toEqual([{name: ice.name, text: ice.text}]);
});

test('Should have heat alerts', () => {
  let day = {['@_code']: null, ['@_high']: heat.threshold + 1, ['@_low']: cold.threshold};
  expect(getAlerts(day)).toEqual([{name: heat.name, text: heat.text}]);
});

test('Should have cold alerts', () => {
  let day = {['@_code']: null, ['@_high']: heat.threshold, ['@_low']: cold.threshold - 1};
  expect(getAlerts(day)).toEqual([{name: cold.name, text: cold.text}]);
});

test('Should have heat and thunderstorm alerts', () => {
  let day = {['@_code']: _.sample(thunderstorms.codes), ['@_high']: heat.threshold + 1, ['@_low']: cold.threshold};
  expect(getAlerts(day)).toEqual([
    {name: thunderstorms.name, text: thunderstorms.text},
    {name: heat.name, text: heat.text}
  ]);
});

test('Should have cold and ice alerts', () => {
  let day = {['@_code']: _.sample(WEATHER_ALERTS[3].codes), ['@_high']: heat.threshold, ['@_low']: cold.threshold - 1};
  expect(getAlerts(day)).toEqual([
    {name: ice.name, text: ice.text},
    {name: cold.name, text: cold.text}
  ]);
});
