import React from "react";
import { useLocation } from "react-router-dom";
import { AiFillLinkedin } from "react-icons/ai";

const SinglePage = () => {
  const aboutData = [
    {
      id: "about-app",
      title: "About this App",
      description:
        "In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items.",
      link: "",
    },
    {
      id: "about-author",
      title: "About the Author",
      description:
        "This app was developed by Jake Shaw, following a guide from GitHub. I'm an Associate Developer at AND Digital, based in Manchester! You can follow me on LinkedIn by clicking below",
      link: "https://www.linkedin.com/in/jake--shaw/",
    },
  ];

  const location = useLocation();
  const id = location.state.id;
  console.log(id);

  const about = aboutData.find((about) => about.id === id);

  return (
    <div className="main__content">
      <h1>{about.title}</h1>
      <p>
        {about.description}
        <a href={about.link} target="blank">
          <AiFillLinkedin size={50} />
        </a>
      </p>
    </div>
  );
};

export default SinglePage;
