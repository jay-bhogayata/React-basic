import React from "react";

const ConditinolRendering = () => {
  const isLoggedIn = true;
  // return <div>welcome {isLoggedIn ? "Jay" : "Guest"}</div>;
  return <div>welcome {isLoggedIn && "Jay"} </div>;
};

export default ConditinolRendering;
