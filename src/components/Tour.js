import React from "react";
import { useState } from "react";
// import "./Data";

function Tour({ id, image, price, info, name, removeTour }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <section className="tour-container">
      <div>
        <img className="images" src={image} alt={name} />
        <div className="text-container">
          <div className="heading-container">
            <h4>Best Of {name} In 3 Days Tour</h4>
            <h4>{price}</h4>
          </div>
          <p>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button
              className="toggleButton"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "show less" : "read more"}
            </button>
          </p>
          <button className="removeButton" onClick={() => removeTour(id)}>
            Not Interested
          </button>
        </div>
      </div>
    </section>
  );
}

export default Tour;
