import React from "react";
import Greet from "./Greet";
import Jsx from "./Jsx";
// import {Greet} from "./Greet"  //use for named export

const App = () => {
  return (
    <div className="bg-stone-900 h-[100vh] text-white text-2xl">
      <h1>Hello world</h1>
      <Greet />
      <Jsx />
    </div>
  );
};

export default App;
