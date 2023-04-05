import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const greetParant = (childName) => {
    alert(`Hello Parant component from  ${childName}`);
  };
  return <ChildComponent greetHandler={greetParant} />;
};

export default ParentComponent;
