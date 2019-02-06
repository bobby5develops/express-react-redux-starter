import React from 'react';
import { Link } from 'react-router';
import scroll from '../common/base/yarboroughScroll';
import './hero.scss';

class Hero extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			didScroll: false,
		};

		this.scrollFn = this.handleScroll.bind(this);
	}

	componentDidMount(){
		console.log('Hero component did mount', this);
	}



	handleScroll(event) {
		event.preventDefault();
		this.setState({
			didScroll: true,
		});
		scroll(document.querySelector('#page-wrap'), 500, 'easeInQuart', () => {
				console.log('scroll callback!!!', this);
			}
		);
	};

	render() {
		return (
			<div className="section group hero">
					<Link className="hero_btn" onClick={this.scrollFn}>
						<h1>Need to build a feature for your Mobile App?</h1>
						<h2>Choose One</h2>
						<span>{this.state.didScroll ? 'YES' : 'NO'}</span>
					</Link>
				{/*<video src={require('./../common/videos/video_preview_h264.mp4')} loop={true} autoPlay={true} width="100%" height="auto"/>*/}
			</div>);
	}
}


export default Hero;
