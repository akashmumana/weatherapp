import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <div class="container">
          <div class="weather-card">
            <img src="accet\img\weather-app.png" alt="Weather App Logo" class="logo" />
            <h1>Weather & Forecast Application</h1>
            <p>Use our weather application to get daily weather forecasts. Download now for free and enjoy accurate weather updates!</p>
            <button class="btn">Download Now</button>
          </div>
        </div>

      </div>

    )
  }
}
