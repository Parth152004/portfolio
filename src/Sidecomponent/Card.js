import React from "react";
import axios from "axios";

export default function CardItem({ id, title, date, content }) {
  const handleDelete = () => {
    axios
      .delete(
        `https://backend-portfolio-95ly.onrender.com/dairy/deletedairy/${id}`
      )
      .then(() => console.log("Deleted:", id))
      .catch((err) => console.error("Delete error:", err));
  };

  return (
    <div className="entry-card">
      <h3 className="card-title">{title}</h3>

      <span className="entry-date">
        {new Date(date).toLocaleDateString()}
      </span>

      <p className="card-content">{content}</p>

      <div className="entry-actions">
        <button className="action-button">Share</button>
        <button className="action-button">Comment</button>
        <button className="action-button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
