import React, { useEffect, useState } from "react";
import "../Style/Home.css";
import axios from 'axios';

export default function Home() {
  const [quotes, setQuotes] = useState("");
  
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get("https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random");
        const quote = response.data[0].q;
        setQuotes(quote);
      } catch (error) {
        console.error("Error fetching quote:", error);
        setQuotes("Inspiration is everywhere, even when the API isn't working!");
      }
    };
    fetchQuote();
  },);

  return (
    <div className="mainhmmain">
      <video className="background-video" autoPlay loop muted>
        <source src={"./videobk.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <div className="Homemain container">
          <div className="Homeleft">
            <h1>
              Enter the Enigmatic World of
              <br /> <b> Parth.</b>
            </h1>
            <h1>
              {quotes}
            </h1>
            <p>
              I'm an insatiably curious problem solver, a thinker who dreams
              big, and a developer with an unquenchable thirst for creativity. I
              love pushing the boundaries of what's possible, whether that's
              through coding, exploring the wonders of nature, or gazing at the
              stars.
            </p>
          </div>
          <div className="Homeright">
            <h3>Scroll for the view</h3>
            <div className="scroll-icon">
              <div className="mouse">
                <div className="wheel"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}