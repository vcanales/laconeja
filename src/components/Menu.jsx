import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
    render() {
        return (
        	<header>
        		<ul>
        			<li>
        				<Link to="/signup">Sign Up</Link>
        			</li>
        		</ul>
        	</hedaer>
		);
    }
}

export default Home;
