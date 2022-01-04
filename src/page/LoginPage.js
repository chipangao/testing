import logo from '../logo.svg';
import './Login.css';
import { useEffect, useState } from 'react';

function LoginPage() {

    const [env, setenv] = useState(null);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [usernamePlaceHolder, setusernamePlaceHolder] = useState(null);
    const [passwordPlaceHolder, setpasswordPlaceHolder] = useState(null);

    function usernameChange(e) {
        e.preventDefault();
        setUsername(e.target.value)
    }
    function passwordChange(e) {
        e.preventDefault();
        setPassword(e.target.value)
    }

    function submit_onClick(e) {
        e.preventDefault();

        let checkUsername = false;
        let checkPassword = false;

        const userData = { username: username, password: password };

        if (username === null || username === '') {
            setusernamePlaceHolder('Please enter your username !')
            checkUsername = false;
        } else {
            checkUsername = true;
        }

        if (password === null || password === '') {
            setpasswordPlaceHolder('Please enter your password !')
            checkPassword = false;
        } else {
            checkPassword = true;
        }

        if (checkUsername && checkPassword) {
            setusernamePlaceHolder(null)
            setpasswordPlaceHolder(null)
            console.log(userData)
        } else {
            console.log('data error!')
        }

    }

    useEffect(() => {
        setenv(process.env.REACT_APP_ENVIRONMENT);
    }, []);

    return (
        <div className="Login">
            <header className="Login-header">
                <div>
                    <img src={logo} className="Login-logo" alt="logo" />
                </div>
                <div>
                    <>You are running this application in <b>{env}</b> mode.</>
                </div>
                <form className="Login-form">
                    <label>
                        Username :
                        <input
                            name="Username"
                            type="text"
                            placeholder={usernamePlaceHolder}
                            onChange={(e) => usernameChange(e)}>
                        </input>
                    </label>
                    <br />
                    <label>
                        Password :
                        <input
                            name="Password"
                            type="password"
                            placeholder={passwordPlaceHolder}
                            onChange={(e) => passwordChange(e)} />
                    </label>
                    <button className="Login-button" onClick={(e) => submit_onClick(e)} >Submit</button>
                </form>
            </header>
            <div>
            </div>
        </div>
    );
}

export default LoginPage;
