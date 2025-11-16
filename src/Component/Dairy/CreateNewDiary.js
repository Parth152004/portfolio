import React, { useState } from 'react'
import "../../Style/Dairy.css"
import DairyHeader from '../../Sidecomponent/DairyHeader'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreateNewDiary() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const [entryData, setEntryData] = useState({
        title: '',
        content: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEntryData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e, action) => {
        setIsLoading(true);
        e.preventDefault();
        axios.post('https://backend-portfolio-95ly.onrender.com/dairy/newdiary', {
            title: entryData.title,
            highlight: entryData.content.substring(0, 100), // Example: first 100 chars as highlight
            mainContnent: entryData.content,
        }).then(response => {
            console.log('Entry successfully saved:', response.data);   
            navigate('/diary');
            setIsLoading(false);
        }).catch(error => {
            setIsLoading(false);
            console.error('There was an error saving the entry!', error);
    });

    if (isLoading) {
        return <div className="loading-state">Loading Entry...</div>;
    }

    };
    return (
        <div className="diary-backcolor">
            <DairyHeader />

            <div className="create-diary-container">
                <h2 className="form-header">Create New Diary Entry</h2>

                <form className="create-diary-form" onSubmit={(e) => handleSubmit(e, 'publish')}>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter Title for the Entry"
                        required
                        className="form-input title-input"
                        value={entryData.title}
                        onChange={handleChange}
                    />

                    <textarea
                        id="content"
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
                            type="button" // Important: use type="button" to prevent default submit
                            className="action-button save-draft-button"
                            onClick={(e) => handleSubmit(e, 'draft')}
                        >
                            Save Draft
                        </button>
                        <button
                            type="submit" // This is the default submit button
                            className="action-button publish-button"
                        >
                            Publish Entry
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
