import "../../Style/Dairy.css";
import Card from '../../Sidecomponent/Card';
import React, { useEffect, useState } from "react";
import DairyHeader from "../../Sidecomponent/DairyHeader";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Dairy() {
  const [diaryEntries, setDiaryEntries] = useState([]);

  useEffect(() => {
    axios.get('https://backend-portfolio-95ly.onrender.com/dairy/getdairy').then(response => {
      setDiaryEntries(response.data.data);
    }).catch(error => {
      console.error("There was an error fetching the diary entries!", error);
    });
  }, []);

  return (
    <div className="diary-backcolor">
      <DairyHeader />
      <Link to="/diary/new" style={{ textDecoration: 'none' }}>
        <p className="new-entry-button">Write New Entry</p>
      </Link>
      <div className="entries-grid">
        {
          diaryEntries.map((entry,index) => (
            <Link
              key={entry.index}
              to={`/diary/${index+1}`}
              style={{ textDecoration: 'none' }}
              state={entry}
            >
              <Card
                key={entry.index}
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
