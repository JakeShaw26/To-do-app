import React from "react";
import { useLocation } from "react-router-dom";

const SinglePage = () => {
  const aboutData = [
    {
      id: "about-app",
      title: "About the App",
      description:
        "In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items.",
    },
    {
      id: "about-author",
      title: "About the Author",
      description:
        "This app was developed by Ibas Majid, a self-taught web developer and a technical writer. He is opened to freelance Gig. So go ahead and connect with ibas on Twitter @ibaslogic.",
    },
  ];

  const location = useLocation();
  const id = location.state.id;
  console.log(id);

  const about = aboutData.find((about) => about.id === id);

  return (
    <div>
      <h1>{about.title}</h1>
      <p>{about.description}</p>
    </div>
  );
};

export default SinglePage;
