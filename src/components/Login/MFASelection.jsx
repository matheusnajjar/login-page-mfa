import { useNavigate } from 'react-router-dom';
import './MFASelection.css';

const MFASelection = () => {
  const navigate = useNavigate();

  const handleMFAOption = (method) => {
    alert(`MFA code sent via ${method}!`);
    navigate('/mfa-entry');
  };

  return (
    <div className="container">
      <h1>Multi-Factor Authentication</h1>
      <div className="mfa-method">
        <p>Select MFA Method:</p>
      </div>
      <div className="mfa-selection">
        <button onClick={() => handleMFAOption('SMS')}>Text Message</button>
        <button onClick={() => handleMFAOption('Email')}>Email</button>
      </div>
    </div>
  );
};

export default MFASelection;
