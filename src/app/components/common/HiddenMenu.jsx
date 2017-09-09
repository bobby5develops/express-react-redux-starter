import React from 'react';
import { Link } from 'react-router';


function HiddenMenu() {
	return (
		// return menu element on value retrieved from showMenu event listener
		<nav id="menu">
			<ul className="mobile-nav">
				<li className="menu-item menu-item-has-children">
					<Link to="/" data-title="Learn About Me."><i className="fa fa-book" aria-hidden="true"></i>Home</Link>
				</li>
				<li>
					<Link to="/bio"><i className="fa fa-book" aria-hidden="true"></i>Bio</Link>
				</li>
				<li>
					<Link to="/projects" href="#" data-title="Apps I've Built."><i className="fa fa-rocket" aria-hidden="true"></i>Projects</Link>
				</li>
				<li>
					<Link to="contact" href="#" data-title="Hire Me."><i className="fa fa-paper-plane" aria-hidden="true"></i>Contact</Link>
				</li>
			</ul>
		</nav>
	);
}


export default HiddenMenu;