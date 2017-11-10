import React from 'react';
import scroll from './../common/yarboroughScroll';
import './hero.scss';

class Hero extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			didScroll: true
		};

		this.handleClick = this.handleClick.bind(this);
	}


	handleClick() {
		this.setState(prevState => ({
			didScroll: !prevState.didScroll,
		}));
			scroll(
				document.querySelector('.header'),
				300,
				'easeOutQuad',
				() => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
			);
	};


	componentDidUpdate() {
		console.log('hero did mount', this.state.didScroll);
	}

	render() {
		return (
			<div className="section group hero">
				<section className="col span_12_of_12">
					<button className="hero_btn" onClick={this.handleClick}>
						{this.state.didScroll ? 'YES' : 'NO'}
						<h1>HERO</h1>
					</button>
				</section>
			</div>);
	}
}


export default Hero;
