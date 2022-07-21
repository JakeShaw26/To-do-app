import React from "react";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";

import SinglePage from "./SinglePage";

const About = () => {
  let navigate = useNavigate();
  return (
    <div>
      <ul>
        <li>
          <button
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
