import React from 'react';
import { Link } from 'react-router';

import Picture from './Picture';

class Home extends React.Component {
    render() {
        return (
        	<div className="centered container">
        		<Picture />
        	</div>
        	
		);
    }
}

export default Home;
