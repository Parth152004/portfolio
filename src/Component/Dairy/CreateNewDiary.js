import React, { useState } from "react";
import { Container, Paper } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import DairyHeader from "../../Sidecomponent/DairyHeader";
import "../../Style/Dairy.css";

export default function CreateNewDiary() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
    const props = location.state || {};
    const [entryData, setEntryData] = useState({
        title: props.title ? props.title : "",
        content: props.content ? props.mainContnent : "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEntryData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await axios.post(
                "https://backend-portfolio-95ly.onrender.com/dairy/newdiary",
                {
                    id: props.id ? props.id : 0,
                    date: props.date ? props.date : "",
                    title: entryData.title,
                    highlight: entryData.content.slice(0, 100),
                    mainContnent: entryData.content,
                }
            );
            navigate("/diary");
        } catch (err) {
            console.error("Error saving entry", err);
        } finally {
            setIsLoading(false);
        }
    };

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
            <Container maxWidth="md">
                <Paper elevation={3} sx={{ p: 4, background: "transparent", boxShadow: "none" }}>
                    <h2 className="form-header">Create New Diary Entry</h2>

                    <form className="create-diary-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter Title for the Entry"
                            required
                            className="form-input title-input"
                            value={entryData.title}
                            onChange={handleChange}
                        />

                        <textarea
                            name="content"
                            placeholder="Write your thoughts here..."
                            rows="15"
                            required
                            className="form-input content-textarea"
                            value={entryData.content}
                            onChange={handleChange}
                        ></textarea>

                        <div className="form-actions">
                            <button
                                type="button"
                                className="action-button save-draft-button"
                                onClick={() => navigate("/diary")}
                            >
                                Publish
                            </button>
                        </div>
                    </form>
                </Paper>
            </Container>
        </div>
    );
}
