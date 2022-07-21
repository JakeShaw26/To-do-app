import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  let navigate = useNavigate();
  return (
    <div className="about__content">
      <ul className="about__list">
        <li>
          <button
            className="about__button"
            onClick={() => {
              navigate("/about-content", {
                state: { id: "about-app" },
              });
            }}
          >
            About App
          </button>
        </li>
        <li>
          <button
            className="about__button"
            onClick={() => {
              navigate("/about-content", {
                state: { id: "about-author" },
              });
            }}
          >
            About Author
          </button>
        </li>
      </ul>
    </div>
  );
};
export default About;
