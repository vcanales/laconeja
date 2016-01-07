import React from 'react';
import { Link } from 'react-router';

import Menu from './Menu';

class Home extends React.Component {
    render() {
        return (
        	<div>
        		<Menu />
        		{this.props.children}
        	</div>
		);
    }
}

export default Home;