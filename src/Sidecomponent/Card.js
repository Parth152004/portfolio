import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function CardItem({ index, id, title, date, content, mainContnent }) {
    const navigate = useNavigate();

    const handleDelete = () => {
        axios.delete(`https://backend-portfolio-95ly.onrender.com/dairy/deletedairy/${id}`)
            .then(() => console.log("Deleted:", id),navigate("/diary/new") )
            .catch((err) => console.error("Delete error:", err));
    };
    return (
        <div className="entry-card">
            <Link
                key={id || index}
                to={`/diary/${index + 1}`}
                style={{ textDecoration: "none" }}
            >
                <h3 className="card-title">{title}</h3>
                <span className="entry-date">{date}</span>
                <p className="card-content">{content}</p>
            </Link>
            <div className="entry-actions">
                <Link
                    to="/diary/new"
                    state={{ id: id, title: title, date: date, content: content, mainContnent: mainContnent }}
                >
                    <button className="action-button" >Edit</button>
                </Link>
                <button className="action-button" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}
