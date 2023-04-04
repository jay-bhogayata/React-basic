import React, { useState } from "react";

const Message = () => {
  const [message, setMessage] = useState("Hello visitor");
  const [btnmsg, setBtnmsg] = useState("subscribe");
  return (
    <div className="mt-10">
      <h1>{message}</h1>
      <button
        type="button"
        className="
        bg-purple-500
        p-3
        mt-10
        rounded-md
        text-center
        "
        onClick={() => {
          setMessage("Thank you for subscribing");
          setBtnmsg("unsubscribe");
        }}
      >
        {btnmsg}
      </button>
    </div>
  );
};

export default Message;
