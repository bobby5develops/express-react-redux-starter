import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router';



const styles = {
	bmBurgerButton: {
		position: 'fixed',
		width: '36px',
		height: '30px',
		left: '36px',
		top: '36px'
	},
	bmBurgerBars: {
		background: '#373a47'
	},
	bmCrossButton: {
		height: '24px',
		width: '24px'
	},
	bmCross: {
		background: '#bdc3c7'
	},
	bmMenu: {
		background: '#bebebe',
		padding: '2.5em 1.5em 0',
		fontSize: '1.15em'
	},
	bmMorphShape: {
		fill: '#373a47'
	},
	bmItemList: {
		color: '#b8b7ad',
		padding: '0.8em'
	},
	bmOverlay: {
		background: 'rgba(0, 0, 0, 0.3)'
	}

};

class OffCanvas extends Component {
	constructor (props) {
		super(props);
		this.state = {
			menuOpen: false,
		};

		this.handleStateChange = this.handleStateChange.bind(this);
		this.toggleMenu = this.toggleMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
	}


	componentDidMount(){
		console.log('OffCanvas did mount', this);
	}


	// This keeps your state in sync with the opening/closing of the menu
	// via the default means, e.g. clicking the X, pressing the ESC key etc.
	handleStateChange (state) {
		this.setState({menuOpen: state.isOpen});
	}

	// This can be used to close the menu, e.g. when a user clicks a menu item
	closeMenu () {
		this.setState({menuOpen: false});
	}

	// This can be used to toggle the menu, e.g. when using a custom icon
	// Tip: You probably want to hide either/both default icons if using a custom icon
	// See https://github.com/negomi/react-burger-menu#custom-icons
	toggleMenu = (event) => {
		event.preventDefault();
		this.setState({menuOpen: !this.state.menuOpen});
		console.log('toggleMenu click event', this.state.menuOpen);
	};

	render () {
		return (
			<div id="page-wrap">
				<Menu
					isOpen={this.state.menuOpen}
					onStateChange={(state) => this.handleStateChange(state)}
					styles={styles}
					customBurgerIcon={false}>
					{/*<Link to="/" data-title="Learn About Me."><i className="fa fa-book" aria-hidden="true"></i>Home</Link>*/}
					<Link to="/bio"><i className="fa fa-book" aria-hidden="true"></i>Bio</Link>
					<Link to="/projects" href="#" data-title="Apps I've Built."><i className="fa fa-rocket" aria-hidden="true"></i>Projects</Link>
					<Link to="contact" href="#" data-title="Hire Me."><i className="fa fa-paper-plane" aria-hidden="true"></i>Contact</Link>
				</Menu>

				<Link to="/" onClick={this.toggleMenu} data-title="Yarborough Mobile & Web Apps" aria-hidden="true">
					<img src={require('./../images/logo.png')} role="presentation" />
				</Link>
			</div>
		)
	}
}

export default OffCanvas;