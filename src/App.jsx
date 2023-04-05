import React from "react";
import Greet from "./Greet";
import Jsx from "./Jsx";
import State from "./State";
import Message from "./Message";
import ClickHandler from "./ClickHandler";
import ParentComponent from "./ParentComponent";
import ConditinolRendering from "./ConditinolRendering";
import ListRender from "./ListRender";
import Form from "./Form";
import PostList from "./PostList";
import PostForm from "./PostForm";
import UseTransition from "./UseTransition";
// import {Greet} from "./Greet"  //use for named export

const App = () => {
  return (
    <div className="bg-stone-900 flex flex-col justify-center items-center text-white text-2xl">
      <h1 className="text-3xl">Hello world in React.js</h1>

      <Greet fname="jay" lname="bhogayata" />
      <Greet fname="john" lname="doe">
        <button
          type="button"
          className="bg-blue-400 text-lg hover:bg-pink-200 text-white p-3 rounded-lg mt-2"
        >
          Click Me
        </button>
      </Greet>
      <Greet fname="linus" lname="torvalds">
        <p>this is children prop</p>
      </Greet>

      <State />

      <Jsx />

      <Message />

      <ClickHandler />

      <ParentComponent />

      <ConditinolRendering />

      <ListRender />

      <Form />

      <PostList />

      <PostForm />

      <UseTransition />
    </div>
  );
};

export default App;
