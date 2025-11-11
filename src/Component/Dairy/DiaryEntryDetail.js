import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import DairyHeader from "../../Sidecomponent/DairyHeader";
import "../../Style/Dairy.css";

export default function DiaryEntryDetail() {

    const { id } = useParams(); 
    const [entry, setEntry] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const allEntries = [
            { id: 1, title: "Parth's First Entry", date: "2024-11-11", content: "This is the complete, full content of the first entry. Here is where I describe my thoughts in great detail, making sure the reader knows exactly what's on my mind today.", comments: [] },
            { id: 2, title: "A Day in the Life", date: "2024-11-12", content: "Today I learned about React components and routing in great depth. This diary entry outlines all the new concepts and how I plan to implement them in my portfolio project to master the framework.", comments: [] },
            { id: 3, title: "Reflections", date: "2024-11-13", content: "Reflecting on my journey so far, I feel excited about the future. Development is tough, but the rewards of creating something functional are immense. This section is about growth.", comments: [] },
            { id: 4, title: "Goals for Next Month", date: "2024-11-14", content: "My goals for next month include improving my coding skills, starting a new project, and mastering state management with React Hooks. Detailed plan inside.", comments: [] },
            { id: 5, title: "Weekend Adventures", date: "2024-11-15", content: "Spent the weekend exploring new places and trying out new activities. It's important to take breaks! This post summarizes my latest non-coding adventure.", comments: [] }
        ];
        const foundEntry = allEntries.find(e => e.id === parseInt(id));
        if (foundEntry) {
            setEntry(foundEntry);
        }
        setIsLoading(false);
    }, [id]);

    if (isLoading) {
        return <div className="loading-state">Loading Entry...</div>;
    }

    if (!entry) {
        return <div className="error-state">Entry Not Found.</div>;
    }

    return (
         <div className="diary-backcolor">
            <DairyHeader />
            <div className="detail-container">
                <h2 className="detail-title">{entry.title}</h2>
                <span className="detail-date">{entry.date}</span>
                <p className="detail-content">{entry.content}</p>
                <div className="sharing-bar">
                    <button className="action-button share-button">Share on Twitter</button>
                    <button className="action-button share-button">Share on Facebook</button>
                </div>
            </div>
        </div>
    )
}
