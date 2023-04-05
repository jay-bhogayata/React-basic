import React, { useState } from "react";

const Form = () => {
  const [value, setValue] = useState("");
  const [textarea, setTextarea] = useState("");
  const [rvalue, setRvalue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `name of user is ${value} , user country name is ${rvalue} and feedback is ${textarea}`
    );
  };
  return (
    <div className="mx-10 text-black bg-gray-500">
      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-gray-900 p-10  border-pink-300 border-2 rounded-lg text-center mt-10"
      >
        <label className="text-purple-600">username</label>
        <br />
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="userName"
        />
        <br />
        <textarea
          value={textarea}
          placeholder="Enter your feedback"
          onChange={(e) => setTextarea(e.target.value)}
        ></textarea>
        <br />
        <div
          className="text-white  text-center"
          onChange={(e) => setRvalue(e.target.value)}
        >
          <label for="india">India</label>
          <input type="radio" name="country" value="india" />
          <br />
          <label for="USA">USA</label>
          <input type="radio" name="country" value="USA" />
          <br />
          <label for="other">other</label>
          <input type="radio" name="country" value="other then india or usa " />
        </div>
        <button
          type="submit"
          className="
        bg-purple-500
        p-3
        mt-10
        rounded-md
        text-center
        "
        >
          submit
        </button>
      </form>
      <h1 className="text-gray-100">user enterd : {value}</h1>

      <h1 className="text-gray-100">textarea enterd : {textarea}</h1>

      <h1 className="text-gray-100">value of radio button: {rvalue}</h1>
    </div>
  );
};

export default Form;
