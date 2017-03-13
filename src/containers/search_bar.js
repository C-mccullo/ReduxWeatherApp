import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

// NOTE❗once your components are being hooked up to Redux️
// make sure to not export the component as default.

class SearchBar extends Component {
	constructor(props) {
		super(props);
		
		this.state = { term: '' };

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		var term = event.target.value
		this.setState({ term: term })
	}

	onFormSubmit(event) {
		// console.log("prevented submit");
		event.preventDefault();

		this.props.fetchWeather(this.state.term);
		this.setState({ term: "" })
	}

	render() {
		return (
			/* Forms are handy because they can give the users already available functionality that HTML forms are given by browsers. This means you don't need to make more event handlers to improve UI */
			<form className='input-group' onSubmit={ this.onFormSubmit }>
				<input type="text" 
							placeholder="Enter your city to get a five-day forcast" 
							className="form-control" 
							value={ this.state.term } 
							onChange={ this.onInputChange.bind(this) }
				/>
				<span className="input-group-btn">
					<button className="btn btn-secondary">Submit</button>
				</span>
			</form>
		)
	}
}

// this hooks up fetchWeather function to Search Bar "container"
// ensure that this function will flow down to the Redux application
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

// first argument is null because this container doesn't care
// for the state being managed by Redux
export default connect(null, mapDispatchToProps)(SearchBar);