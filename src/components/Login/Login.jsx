import { FaUser, FaLock } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && password) {
      navigate('/mfa-selection');
      console.log('username: ' + username + ' and ' + password);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>System Access</h1>
        <div className="input-field">
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>
        <div className="recall-forget">
          <label htmlFor="remember-me">
            <input type="checkbox" id="remember-me" />
            Remember Me
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        <button>Login</button>
        <div className="signup-link">
          <p>
            Don&apos;t have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
