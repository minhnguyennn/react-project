import React from "react";
import "./Campus.css";
import galler_1 from "../../assets/gallery-1.png";
import galler_2 from "../../assets/gallery-2.png";
import galler_3 from "../../assets/gallery-3.png";
import galler_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={galler_1} alt="galler_1" />
        <img src={galler_2} alt="galler_2" />
        <img src={galler_3} alt="galler_3" />
        <img src={galler_4} alt="galler_4" />
      </div>
      <button className="btn dark-btn">
        See more here <img src={white_arrow} alt="white_arrow" />
      </button>
    </div>
  );
};

export default Campus;
