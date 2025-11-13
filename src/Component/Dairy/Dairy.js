import "../../Style/Dairy.css";
import Card from '../../Sidecomponent/Card';
import React, { useEffect, useState } from "react";
import DairyHeader from "../../Sidecomponent/DairyHeader";
import { Link } from "react-router-dom";
import CreateNewDiary from "./CreateNewDiary";

export default function Dairy() {
  const [diaryEntries, setDiaryEntries] = useState([]);

  useEffect(() => {
    const initialEntries = [
      { id: 1, title: "Parth's First Entry", date: "2024-11-11", highlight: "This is the content of the first entry.", mainContnent: "This is the complete, full content of the first entry. Here is where I describe my thoughts in great detail, making sure the reader knows exactly what's on my mind today." },
      { id: 2, title: "A Day in the Life", date: "2024-11-12", highlight: "Today I learned about React components and routing.",mainContnent: "Today I learned about React components and routing in great depth. This diary entry outlines all the new concepts and how I plan to implement them in my portfolio project to master the framework." },
      { id: 3, title: "Reflections", date: "2024-11-13", highlight: "Reflecting on my journey so far, I feel excited about the future.",mainContnent: "Reflecting on my journey so far, I feel excited about the future. Development is tough, but the rewards of creating something functional are immense. This section is about growth." },
      { id: 4, title: "Goals for Next Month", date: "2024-11-14", highlight: "My goals for next month include improving my coding skills and starting a new project.",mainContnent: "My goals for next month include improving my coding skills, starting a new project, and mastering state management with React Hooks. Detailed plan inside." },
      { id: 5, title: "Weekend Adventures", date: "2024-11-15", highlight: "Spent the weekend exploring new places and trying out new activities.",mainContnent: "Spent the weekend exploring new places and trying out new activities. It's important to take breaks! This post summarizes my latest non-coding adventure." }
    ];
    setDiaryEntries(initialEntries);
  }, []);

  return (
    <div className="diary-backcolor">
      <DairyHeader />
      <Link to="/diary/new" style={{ textDecoration: 'none' }}>
        <p className="new-entry-button">Write New Entry</p>
      </Link>
      <div className="entries-grid">
        {
          diaryEntries.map(entry => (
            <Link
              key={entry.id}
              to={`/diary/${entry.id}`}
              style={{ textDecoration: 'none' }}
              state={entry}
            >
              <Card
                key={entry.id}
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
