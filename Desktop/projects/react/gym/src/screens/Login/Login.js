import React from "react";
import '../Login/Login.css';
const Login = () => {
    return (
        <div id="loginPage">
            <div className="cardContainer">
                <div id="card">
                    <div id="text">EMAIL</div>
                    <input type="text" id="email" />
                    <div id="text">PASS</div>
                    <input type="password" id="pass" />
                    <div id="lower">
                        <button id="logInBtn"><div id="loginText"> LOG IN</div></button>
                        <button id="signInBtn"><div id="signinText">GO TO SIGN IN</div></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;