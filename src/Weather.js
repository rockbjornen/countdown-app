import React, { Component } from 'react';
import axios from 'axios';

class Weather extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mumbai: 0,
            stockholm: 0
        }
    }

    componentDidMount() {
        this.getMumbaiWeather();
        this.getStockholmWeather();
    }

    getMumbaiWeather = () => {
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=Mumbai&units=metric&appid=1ebf0b62e0e74a698ca5939c772a568e')
            .then((response) => {
                this.setState({ ...this.state, mumbai: response.data.main.temp })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getStockholmWeather = () => {
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=Stockholm&units=metric&appid=1ebf0b62e0e74a698ca5939c772a568e')
            .then((response) => {
                this.setState({ ...this.state, stockholm: response.data.main.temp })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {

        return (
            <div className="weather-div">
                <div className="city">
                    <div className="city-title">
                        Mumbai
                    </div>
                    <div className="temp">
                        {Math.round(this.state.mumbai)}°C
                    </div>
                    <p className="weather-desc">Sjukt varmt!</p>
                </div>
                <div className="city">
                    <div className="city-title">
                        Sthlm
                    </div>
                    <div className="temp">
                        {Math.round(this.state.stockholm)}°C
                    </div>
                    <p className="weather-desc">Sjukt kallt!</p>
                </div>
            </div >
        )
    }
}

export default Weather;