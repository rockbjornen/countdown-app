import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import moment from 'moment';
import './App.css';
import ProgressBar from './ProgressBar';
import SpotifyPlayer from 'react-spotify-player';
import Shantaram from './assets/shantaram.jpg';
import Weather from './Weather';
import India from './assets/india.png';

class App extends Component {

  state = {
    date: new Date(),
  }

  componentDidMount() {
    setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );
  }

  getToDate = () => {
    const toDate = moment("2018-12-22T00:35").subtract(4, "hours").subtract(30, "minutes") - moment();
    return toDate;
  }

  render() {
    const size = {
      width: '100%',
      height: 80,
    };

    return (
      <div className="App">
        <div className="Title">Isabell + Björn = ❤</div>
        <img className="india1" src={India} alt="" />
        <img className="india2" src={India} alt="" />
        <div className="time"></div>
        <Countdown
          date={moment() + this.getToDate()}
          renderer={renderer}
        />
        <div className="progress-card">
          <div className="progress">
            <ProgressBar />
            <div className="princess"><span role="img" aria-label="princess">👸🏼</span></div>
          </div>
        </div>
        <div className="weekly">
          <div className="spotify" style={{ "backgroundColor": "#449B9D" }}>
            <div className="spotify-label">Veckans låt</div>
            <SpotifyPlayer
              uri="spotify:user:laundry_service:playlist:5GxRQ54dGmqzzMgO1eFzZd"
              size={size}
              view={'list'}
              theme={'black'}
            />
          </div>
          <div className="weather" style={{ "backgroundColor": "#BB8F9D" }}>
            <Weather />
          </div>
          <div className="spotify" style={{ "backgroundColor": "#95CBC9" }}>
            <div className="spotify-label">Aktuell bok</div>
            <div className="book">
              <img className="book-image" src={Shantaram} alt="" /><div className="book-author"> Gregory David Roberts</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return <div className="counter">
      <div className="counterItem">
        <div className="counterItemNumber" style={{ "backgroundColor": "#61B1A2" }}>{days}</div>
        <div className="counterItemLabel">Dagar</div>
      </div>
      <div className="counterItem">
        <div className="counterItemNumber" style={{ "backgroundColor": "#95CBC9" }}>{hours}</div>
        <div className="counterItemLabel">Timmar</div>
      </div>
      <div className="counterItem">
        <div className="counterItemNumber" style={{ "backgroundColor": "#DFAA83" }}>{minutes}</div>
        <div className="counterItemLabel">Minuter</div>
      </div>
      <div className="counterItem">
        <div className="counterItemNumber" style={{ "backgroundColor": "#BB8F9D" }}>{seconds}</div>
        <div className="counterItemLabel">Sekunder</div>
      </div>
    </div>
  }
}

const Completionist = () => <span>Nu händer det!</span>