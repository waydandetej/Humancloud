import React from "react";
import "./Spage.css";
import button from "../../images/button.png";

function Spage() {
  return (
    <div className="sec-page">
      <div className="header-container">
        <h1>Build Perfect with Ramneet</h1>
      </div>
      <div className="sample2">
        {/* Add more content as needed */}
        <p className="primary-heading">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur ma
        </p>

        <div className="button_class">
          <img src={button} alt="button" className="button" />
        </div>
      </div>
    </div>
  );
}

export default Spage;
