import React, { Component } from "react";
// 👇 pulling in data from redux into this container so use react-redux
import { connect } from "react-redux"; 
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";

class WeatherList extends Component {

	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);
		const { lon, lat } = cityData.city.coord;
		return (
			<tr key={name}>
				<td>
					<GoogleMap lat={lat} lon={lon}/>
				</td>
				<td>
					<Chart data={temps} color="tomato" units="K"/>
				</td>
				<td>
					<Chart data={pressures} color="mediumaquamarine" units="hPA"/>
				</td>
				<td>
					<Chart data={humidity} color="skyblue" units="%"/>
				</td>
			</tr>
		)
	}

	render() {
		return (
			<table className="weather-table table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature(K)</th>
						<th>Pressure(hPA)</th>
						<th>Humidity(%)</th>
					</tr>
				</thead>
				<tbody>
					{ this.props.weather.map(this.renderWeather) }
				</tbody>
			</table>
		)
	}
}

// attaching state to redux 
function mapStateToProps(state) {
	return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);
