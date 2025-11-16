import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import DairyHeader from "../../Sidecomponent/DairyHeader";
import "../../Style/Dairy.css";
import axios from "axios";

export default function DiaryEntryDetail() {

    const { id } = useParams();
    const [entry, setEntry] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchEntry = async () => {
            setIsLoading(true);
            await axios.get('https://backend-portfolio-95ly.onrender.com/dairy/getdairy').then(response => {
                const allEntries = response.data.data;
                if (allEntries.length >= id) {
                    setEntry(allEntries[id - 1]);
                }
                setIsLoading(false);
            }).catch(error => {
                console.error("There was an error fetching the diary entry!", error);
                setIsLoading(false);
            });
            console.log(entry);
            setIsLoading(false);
        };
        fetchEntry();
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
                <p className="detail-content">{entry.mainContnent}</p>
                <div className="sharing-bar">
                    <button className="action-button share-button">Share on Twitter</button>
                    <button className="action-button share-button">Share on Facebook</button>
                </div>
            </div>
        </div>
    )
}
