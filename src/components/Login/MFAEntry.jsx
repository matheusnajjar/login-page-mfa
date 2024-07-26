import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MFAEntry.css';
import { FaKey } from 'react-icons/fa';

const MFAEntry = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState('');

  const handleSubmit = () => {
    if (code) {
      navigate('/todo-list');
    } else {
      alert('Please enter a code');
    }
  };

  return (
    <div className="container">
      <h1 id="auth-code">Enter Authentication Code</h1>
      <div className="input-field">
        <input
          className="input"
          type="text"
          placeholder="Enter Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
        <FaKey className="icon" />
      </div>
      <button onClick={handleSubmit}>Submit Code</button>
    </div>
  );
};

export default MFAEntry;
