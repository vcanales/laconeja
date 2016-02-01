import React from 'react';
import { Link } from 'react-router';

import '../../public/css/login.css';

class Login extends React.Component {
    render() {
        return (
                <section id="login">
                    <h1 className="colorize-font">Sign In</h1>
                    <form>
                        <div className="input colorize-font">
                            <input type="text" name="username" placeholder="Username" />
                        </div>
                        <div className="input colorize-font">
                            <input type="password" name="password" placeholder="Password" />
                        </div>
                    </form>
                </section>
		);
    }
}

export default Login;
