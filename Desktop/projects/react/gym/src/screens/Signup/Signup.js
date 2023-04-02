import React from "react";
import '../Signup/Signup.css';
const Signup = () => {
    return (
        <div id="loginPage">
            <div id="card">
                <div id="text">E-MAIL   </div>
                <input type="text" id="email" />
                <div id="text">PASSWORD</div>
                <input type="password" id="pass" />
                <div id="text">CONFIRM PASSWORD</div>
                <input type="password" id="pass" />
                <div id="lower">
                    <button id="logInBtn"><div id="loginText"> CREATE</div></button>
                </div>
            </div>
        </div>
    );
}

export default Signup;