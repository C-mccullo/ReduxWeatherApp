import axios from "axios";

const API_KEY = "bc7f6df8afc21c472aa9d5aeb1420d95";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {

	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
	console.log(request);
}