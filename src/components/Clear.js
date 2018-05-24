import React from "react";

class Clear extends React.Component {
	render() {
		return (
				<form onSubmit={this.props.cancelCourse}>
					<button id="clearButton">Clear!</button>
				</form>

		);
	}
}

export default Clear;