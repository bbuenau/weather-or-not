import React, { Component } from 'react';

import laksjflksjdf from './Conditions.css';

class Conditions extends Component {
  render() {

    const text = this.props.current;

    return (
      <div className="GreenText">
          {text}
      </div>
    );
  }
}

export default Conditions;
