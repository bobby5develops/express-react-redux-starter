import React from 'react';

class Hero extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			isHidden: true,
	};
	}

	render() {
		return (
			<div className="section group hero">
				<section className="col span_12_of_12">
					<h1>HERO</h1>
				</section>
			</div>);
	}
}


export default Hero;
