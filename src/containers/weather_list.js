import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
    renderWeather(cityData) {
        if (cityData === undefined)
            return;

        const name = cityData.city.name;
        return (
            <tr key={cityData.city.id}>
                <td>{name}</td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
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