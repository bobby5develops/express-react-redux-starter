import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			isHidden: true,
		};
	}

	toggleHidden () {
		this.setState({
			isHidden: !this.state.isHidden,
		});
	}

	render() {
	       return (

              <header>
                   <nav className="nav toggle-nav" role="navigation">
                      <ul className="section group">
                  <li className="span_1_of_12 active">
                    <Link to="/" onClick={this.toggleHidden.bind(this)} data-title="Welcome to the Robert Yarborough Studio" aria-hidden="true">
                      <img src={require("./images/logo.png")} role="presentation" />
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="/about" data-title="Learn About Me" aria-hidden="true">About</Link>
                    </li> */}
                </ul>
                   </nav>
                  {console.log(!this.state.isHidden && <Hiddenmenu />)}
                {!this.state.isHidden && <Hiddenmenu />}

              </header>

           );
    }
}
const Hiddenmenu = () => {
	return (
		<div id="menu">
			<p>hello</p>
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
		</div>
	);
};



export default Header;
