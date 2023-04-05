import React, { useEffect, useState } from "react";

const PostList = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <ul>
        {post.map((p) => {
          return <li key={p.id}>{p.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default PostList;
