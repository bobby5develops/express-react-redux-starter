import React from 'react';
import scroll from '../common/base/yarboroughScroll';
import './hero.scss';

class Hero extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			didScroll: true,
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => ({
			didScroll: !prevState.didScroll,
		}));
			scroll(
				document.querySelector('.header'),
				500,
				'easeInQuart',
				() => {
					console.log('scroll callback!!!');
				}
			);
	};

	componentDidUpdate() {
		console.log('hero did mount', this.state.didScroll);
	}

	render() {
		return (
			<div className="section group hero">
					<button className="hero_btn" onClick={this.handleClick}>
						<h1>Need to build a feature for your Mobile App?</h1>
						<h2>Choose One</h2>
						<span>{this.state.didScroll ? 'YES' : 'NO'}</span>
					</button>
				{/*<video src={require('./../common/videos/video_preview_h264.mp4')} loop={true} autoPlay={true} width="100%" height="auto"/>*/}
			</div>);
	}
}


export default Hero;
