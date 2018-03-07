import React, { Component } from 'react';

class ForecastTable extends Component {

  render() {
    return (
      <div>
        {
          this.props.data.length > 0 &&
          <h2>{this.props.data.length}-day Forecast</h2>
        }
        <ul>
          {this.props.data.map((day) =>
            <li key={day.date}>
              <div>
                <span>{day.day} {day.date} High: {day.high} Low: {day.low}</span>
              </div>
              {day.alerts.map((alert) =>
                <div key={alert.name}>
                  <span>{alert.text}</span>
                </div>
              )}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default ForecastTable;
