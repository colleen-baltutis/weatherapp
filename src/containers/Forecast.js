import React, { Component } from 'react';
import { connect } from 'react-redux';
import ForecastTable from '../components/ForecastTable'
import * as forecastActions from '../store/forecast/actions';
import * as forecastSelectors from '../store/forecast/reducer';

class Forecast extends Component {
  componentDidMount() {
    this.props.dispatch(forecastActions.fetchForecast());
  }
  render() {
    return (
      <div>
        <h3>{ this.props.forecast.condition.temp } { this.props.forecast.condition.text }</h3>
        <span>{ this.props.forecast.title }</span>
        <ForecastTable
          data={ this.props.forecast.multiDayForecast }
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    forecast: forecastSelectors.getForecast(state)
  };
}

export default connect(mapStateToProps)(Forecast);
