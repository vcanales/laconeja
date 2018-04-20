import React from 'react';

import './Signup.css';

const Register = () => (
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
        <input type="submit" value="Sign Up!" />
      </div>
    </form>
  </section>
);

export default Register;
