import React from "react";

const headerStyle = {
  padding: "20px 0",
  lineHeight: "1.5em",
};

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1
        style={{
          fontSize: "5rem",
          fontWeight: "600",
          marginBottom: "2rem",
          lineHeight: "1em",
          color: "#ececec",
          textAlign: "center",
        }}
      >
        My To Do List
      </h1>
    </header>
  );
};

export default Header;
