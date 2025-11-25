import React, { useEffect, useState } from "react";
import {
  Container,
  CircularProgress,
  Grid,
  Typography
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import DairyHeader from "../../Sidecomponent/DairyHeader";
import CardItem from "../../Sidecomponent/Card";
import "../../Style/Dairy.css";

export default function Diary() {
  const [diaryEntries, setDiaryEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://backend-portfolio-95ly.onrender.com/dairy/getdairy")
      .then((res) => {
        setDiaryEntries(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching diary entries", err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="diary-backcolor">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="diary-backcolor">
      <DairyHeader />

      <Link to="/diary/new" style={{ textDecoration: "none" }}>
        <p className="new-entry-button">Write New Entry</p>
      </Link>

      <div className="entries-grid">
        {diaryEntries.map((entry, index) => (
          <Link
            key={entry._id || index}
            to={`/diary/${index + 1}`}
            style={{ textDecoration: "none" }}
            state={entry}
          >
            <CardItem
              id={entry._id}
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
