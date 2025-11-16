import React, { useState } from 'react'
import "../../Style/Dairy.css"
import DairyHeader from '../../Sidecomponent/DairyHeader'
import axios from 'axios';

export default function CreateNewDiary() {
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
        e.preventDefault();
        axios.post('https://backend-portfolio-95ly.onrender.com/dairy/newdiary', {
            title: entryData.title,
            highlight: entryData.content.substring(0, 100), // Example: first 100 chars as highlight
            mainContnent: entryData.content,
        }).then(response => {
            console.log('Entry successfully saved:', response.data);    
        }).catch(error => {
            console.error('There was an error saving the entry!', error);
    });

        // In a real app:
        // 1. You would validate the data.
        // 2. You would send the data (entryData) to your API/database.
        // 3. You would navigate the user back to the list or detail page.
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
