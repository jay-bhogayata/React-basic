import React, { useState } from "react";

const PostForm = () => {
  const [uname, setUname] = useState("");
  const [age, setAge] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(uname);
    // alert(age);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: uname,
        body: age,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  return (
    <div className="">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <label htmlFor="uname">username</label>
        <input
          type="text"
          name="uname"
          placeholder="username"
          value={uname}
          onChange={(e) => setUname(e.target.value)}
        />
        <br />
        <label htmlFor="age">age</label>
        <input
          type="number"
          name="age"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <button type="submit" className="bg-green-500 p-2">
          submit
        </button>
      </form>
    </div>
  );
};

export default PostForm;
