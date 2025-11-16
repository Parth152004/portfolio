import "../../Style/Dairy.css";
import Card from '../../Sidecomponent/Card';
import React, { useEffect, useState } from "react";
import DairyHeader from "../../Sidecomponent/DairyHeader";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Dairy() {
  // --- State Variables ---
  const [diaryEntries, setDiaryEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inputPassword, setInputPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate(); // Hook for redirection

  // --- Static Password (WARNING: Unsafe for production) ---
  const STATIC_PASSWORD = "jyotika"; 

  // --- Authentication Handler ---
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (inputPassword.toLowerCase() === STATIC_PASSWORD) {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setInputPassword('');
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      setIsLoading(true);
      axios.get('https://backend-portfolio-95ly.onrender.com/dairy/getdairy').then(response => {
        setDiaryEntries(response.data.data);
        setIsLoading(false);
      }).catch(error => {
        setIsLoading(false);
        console.error("There was an error fetching the diary entries!", error);
      });
    } else {
      setIsLoading(false);
    }
  }, [isAuthenticated, navigate]);

 
  if (isLoading && isAuthenticated) {
    return <div className="loading-state">Loading Entries...</div>;
  }

  // 2. Render Password Prompt (if not authenticated)
  if (!isAuthenticated) {
    return (
      <div className="diary-backcolor password-overlay">
        <div className="password-popup">
          <form onSubmit={handlePasswordSubmit}>
            <h2>Diary Access</h2>
            <p>Please Enter the Name to View Entries.</p>
            <input
              type="password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              placeholder="Enter Your Name"
              autoFocus
            />
            {error && <p className="error-message">Please Enter Your Name 😁!</p>}
            <div className="popup-actions">
              <button type="submit">Unlock</button>
              <button type="button" onClick={() => navigate('/')}>Home</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // 3. Render Main Content (if authenticated)
  return (
    <div className="diary-backcolor">
      <DairyHeader />
      <Link to="/diary/new" style={{ textDecoration: 'none' }}>
        <p className="new-entry-button">Write New Entry</p>
      </Link>
      <div className="entries-grid">
        {
          diaryEntries.map((entry, index) => (
            // Changed key to entry._id (assuming MongoDB provides an _id) for better practice
            <Link
              key={entry._id || index}
              to={`/diary/${index + 1}`}
              style={{ textDecoration: 'none' }}
              state={entry}
            >
              <Card
                title={entry.title}
                date={entry.date}
                content={entry.highlight}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}