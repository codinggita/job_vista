import React from "react";
import "../css/Seekers_Story.css";
function Seeker_Story(props) {
  return (
    <>
      <div className="seeker-story">
        <img
          src={props.image} alt=""
        />
        <div className="para">
          <p>{props.para}</p>
          
        </div>
      </div>
    </>
  );
}

export default Seeker_Story;
