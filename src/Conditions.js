import React, { Component } from 'react';

import laksjflksjdf from './Conditions.css';

class Conditions extends Component {
  render() {

    const data = this.props.data;

    let icon = "";
    if (data.icon === 'cloudy') {
      icon = "☁️";
    } else if (data.icon === 'partly-cloudy-day') {
      icon = "⛅️";
    } else if (data.icon === 'clear-day') {
      icon = "😎";
    }

    return (
      <div className="GreenText">
          
          {icon + ' ' + data.summary}
      </div>
    );
  }
}

export default Conditions;
