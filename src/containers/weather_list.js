import React, { Component } from 'react';
import { connect } from 'react-redux';


class WeatherList extends Component {
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