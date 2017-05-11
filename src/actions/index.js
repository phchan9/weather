import axios from 'axios';


const API_KEY = 'a4b16496612914f13cba1d193ea145e4';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?\
appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    };
};
