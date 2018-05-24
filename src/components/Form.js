import React from "react";

class Form extends React.Component {
	render() {
		return (
				<form onSubmit={this.props.getWeather}>
					<input type="text" name="city" placeholder="city..." />
					<input type="text" name="country" placeholder="country..."/>
					<button id="submitButton">Get Weather!</button>
				</form>

		);
	}
}

export default Form;