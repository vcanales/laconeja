import React from 'react';
import { Link } from 'react-router';
import '../../public/css/main.css';

import Header from './Header.jsx';

class Home extends React.Component {
    render() {
        return (
        	<div>
        		<Header />
        		{this.props.children}
        	</div>
		);
    }
}

export default Home;