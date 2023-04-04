import React from "react";
import Greet from "./Greet";
import Jsx from "./Jsx";
// import {Greet} from "./Greet"  //use for named export

const App = () => {
  return (
    <div className="bg-stone-900 h-[100vh] text-white text-2xl">
      <h1>Hello world</h1>
      <Greet fname="jay" lname="bhogayata" />
      <Greet fname="john" lname="doe">
        <button
          type="button"
          className="bg-blue-400 text-lg hover:bg-pink-200 text-white p-3 rounded-lg mt-2"
        >
          Click Me
        </button>
      </Greet>
      <Greet fname="linus" lanme="torvalds">
        <p>this is children prop</p>
      </Greet>
      {/* <Jsx /> */}
    </div>
  );
};

export default App;
