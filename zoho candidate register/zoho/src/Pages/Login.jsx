// src/components/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Form.css';
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            navigate('./Home');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="loginContainer bod">
            <div>
            <h2>Login</h2>
            <input className='loginInput'
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input className='loginInput'
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className='loginButton' onClick={handleLogin}>Login</button>
             <nav className='loginNav' ><Link to="/Register">Click here to Register</Link> </nav>
             </div>
             
        </div>
    );
}

export default Login;