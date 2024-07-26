import './App.css';
import Login from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import MFASelection from './components/Login/MFASelection';
import MFAEntry from './components/Login/MFAEntry';
import MainPage from './components/Todo/MainPage.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mfa-selection" element={<MFASelection />} />
        <Route path="/mfa-entry" element={<MFAEntry />} />
        <Route path="/todo-list" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
