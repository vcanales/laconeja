import React from 'react';
import { Link } from 'react-router';

import '../../public/css/menu.css';

class Menu extends React.Component {
    render() {
        return (
        	<menu>
        		<ul>
                    <li>
                        <Link to="/login" className="colorize-font">
                            <i className="fa fa-sign-in"></i> Sign In
                        </Link>
                    </li>
        			<li>
        				<Link to="/signup" className="colorize-font">
                            <i className="fa fa-user-plus"></i> Sign Up
                        </Link>
        			</li>
        			<li>
        				<Link to="/upload" className="colorize-font"><i className="fa fa-cloud-upload"></i> Upload your coneja</Link>
        			</li>
        		</ul>
        	</menu>
		);
    }
}

export default Menu;
