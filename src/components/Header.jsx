import React from 'react';
import { Link } from 'react-router';
import '../../public/css/header.css';

class Header extends React.Component {
    render() {
        return (
        	<header>
        		<div id="logo">
        			<img src="/img/laconeja.svg" alt="La Coneja"/>
        		</div>
        	</header>
		);
    }
}

export default Header;
