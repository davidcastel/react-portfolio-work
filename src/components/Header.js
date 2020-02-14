import React from "react";
import { Link } from "react-router-dom";

const Header = ({ children }) => {
  // a component will be passed down through props
  // returns that component itself, within jsx, now with the header link attatched above it.
  const style = {
    display: "inline-block",
    margin: 10,
    marginBottom: 30
  };
  // Better way, so that the page does not refresh every time
  return (
    <div>
      <div>
        <h3 style={style}>
          <Link to="/"> Home </Link>
        </h3>
        <h3 style={style}>
          <Link to="/jokes"> Jokes </Link>
        </h3>
        <h3 style={style}>
          <Link to="/music-master"> Music Master </Link>
        </h3>
        <h3 style={style}>
          <Link to="/countdown-champ"> Countdown Champ </Link>
        </h3>
      </div>
      {children}
    </div>
  );
};

export default Header;
