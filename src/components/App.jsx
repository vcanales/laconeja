import React from 'react';
import { Link } from 'react-router';
import '../../public/css/main.css';

import Header from './Header.jsx';
import Menu from './Menu.jsx';

class Home extends React.Component {
    render() {
        return (
        	<div>
        		<Header />
        		<Menu />
        		{this.props.children}
        	</div>
		);
    }
}

export default Home;