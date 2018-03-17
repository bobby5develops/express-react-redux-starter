import React from 'react';
import { Link } from 'react-router';
import HiddenMenu from './HiddenMenu';

class Header extends React.Component {
	 constructor () {
        super();
        this.state = {
			isHidden: true,
		};

        this.toggleHidden = this.toggleHidden.bind(this);
        this.transformContent = this.transformContent.bind(this);
	}


	componentDidMount(){
		if (this.state.isHidden){
			document.querySelector('#main_content').style.marginLeft = '0px';
		}
	}

	transformContent (){
		document.querySelector('#main_content').style.marginLeft = '250px';
		document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
	}

	toggleHidden (event) {
		 event.preventDefault();
		this.setState({
			isHidden: !this.state.isHidden,
			transformContent: this.transformContent(),
		});
	 }




     render() {
	       return (
              <header className="header">
                   <nav className="nav toggle-nav" role="navigation">
                      <ul className="section group">
                  		<li className="span_1_of_12 active">
                    		<Link to="/" onClick={this.toggleHidden} data-title="Yarborough Mobile & Web Apps" aria-hidden="true">
                      			<img src={require('./images/logo.png')} role="presentation" />
                    		</Link>
                  		</li>
					  </ul>
                   </nav>
				  {this.state.isHidden === false && <HiddenMenu />}
              </header>
           );
    }
}

export default Header;



{/*const Hiddenmenu = () => {
	return (
		<div id="menu" className="show-nav">
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
};*/}

