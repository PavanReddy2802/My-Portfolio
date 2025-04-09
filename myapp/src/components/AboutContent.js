import { Link } from "react-router-dom";
import "./AboutContentStyles.css";

import React from 'react'
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

const AboutContent = () => {
  return (
  <div className="about">
    <div className="left">
        <h1>Who Am I?</h1>
        <p>I am Pavan Kumar, a passionate and driven BTech student with a keen interest in technology and problem-solving. I enjoy learning new skills, exploring innovative ideas, and striving to grow both personally and professionally in the world of engineering.</p>
        <Link to="./contact">
        <button className="btn">Contact</button>
        </Link>
    </div>
    <div className="right">
        <div className="img-container">
            <div className="img-stacktop">
                <img src={React1} className="img" alt="true" />
            </div>
            <div className="img-stacktop">
                <img src={React2} className="img" alt="true" />
            </div>
        </div>
    </div>
    </div>
  );
};

export default AboutContent