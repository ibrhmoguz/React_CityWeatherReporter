import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
    renderWeather(cityData) {
        if (cityData === undefined)
            return;

        const temps = cityData.list.map(weather => weather.main.temp - 273.15);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        //console.log(temps);
        const name = cityData.city.name;

        return (
            <tr key={cityData.city.id}>
                <td>{name}</td>
                <td>
                    <Chart data={temps} color="red" units="℃" />
                </td>
                <td>
                    <Chart data={pressures} color="orange" units="hPa" />
                </td>
                <td>
                    <Chart data={humidities} color="purple" units="%" />
                </td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (℃)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

// To get data from Redux over root reducer.
// ES6 format to use single param identical with the function below.
function mapStateToProps({ weather }) {
    return { weather };
}

// function mapStateToProps(state) {
//     return { weather: state.weather };
// }

export default connect(mapStateToProps)(WeatherList);