import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Header';
    }
    render() {
        return (
        	<nav className="navbar navbar-light">
        		<ul className="nav navbar-nav">
        			<li className="nav-item">
        				Sign in
        			</li>
        		</ul>
        	</nav>
        );
    }
}

export default Header;
