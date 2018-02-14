import axios from 'axios';

const API_KEY = "30340e1cbd76d4ce8bd026d9fcf180e4";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},tr`;
    const request = axios.get(url);

    //console.log('Request:');
    //console.log(request);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}