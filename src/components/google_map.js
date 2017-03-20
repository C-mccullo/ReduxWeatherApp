import React, { Component } from "react";

class GoogleMap extends Component {
	componentDidMount() {
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}
	render() {
		return (
			// component is given a react prop of "ref". ref helps by giving a direct reference to an HTML element that has been rendered to the page.
			<div className="google-map" ref="map"/> // div is accessed using -> this.refs.map
		)
	}
}

export default GoogleMap;