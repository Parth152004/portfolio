import React from 'react';

export default function Card({ title, date, content }) { 
    const handleShare = () => { console.log(`Sharing: ${title}`); };
    const handleComment = () => { console.log(`Viewing comments for: ${title}`); };

    return (
        <div className="entry-card">
            <h3 className="card-title">{title}</h3>
            <span className="entry-date">{date}</span>
            <p className="card-content">{content}</p>
            <div className="entry-actions"> 
                <button className="action-button share-button" onClick={handleShare}>Share</button>
                <button className="action-button comment-button" onClick={handleComment}>Comment</button>
            </div>
        </div>
    );
}