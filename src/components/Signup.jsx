import React from 'react';
import { Link } from 'react-router';
import ajax from 'superagent';

import '../../public/css/signup.css';

class Register extends React.Component {

    register(e,t) {
        let postData = $('#signup>form').serialize();
        ajax.put('/user')
        .send(postData)
        .end((err,res) => {
            if (err || !res.ok) {
                return alert(err);
            }
            let data = res.body;
            if (data.status === 'error') {
                return alert("Error");
            }
        });
        e.preventDefault();
    }

    render() {
        return (
        	<section id="signup">
                <h1 className="colorize-font">Delve into the world of conejas...</h1>
                <form>
                    <div className="input colorize-font">
                        <input type="text" name="username" placeholder="Username" />
                    </div>
                    <div className="input colorize-font">
                        <input type="password" name="password" placeholder="Password" />
                    </div>
                    <div className="input colorize-font">
                        <input type="text" name="email" placeholder="Email" />
                    </div>
                    <div className="input colorize-font">
                        <input type="submit" onClick={this.register.bind(this)}value="Sign Up!" />
                    </div>
                </form>
            </section>
		);    
    }
}

export default Register;
