import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import API_KEY from './key';
import DarkSkySkeleton from 'dark-sky-skeleton';

import Conditions from './Conditions';

const LAT = 44.048;
const LONG = -123.098;

const darkSky = new DarkSkySkeleton(API_KEY);



class App extends Component {

  constructor() {
    super();
    this.state = {
      weather: null
    };
  }

  componentDidMount() {
    
    darkSky
      .latitude(LAT)
      .longitude(LONG)
      .units('us')
      .language('en')
      .get()
      .then(data => {

        console.log(data);
        
        this.setState({
          weather: data
        });

      });

  }

  render() {

    const currentConditions = "It's hot!";

    let icon = null;
    if(this.state.weather !== null) {
      icon = this.state.weather.currently.icon;
    }

    return (
      <div className="App">
        {icon}
      </div>
    );
  }
}

export default App;
