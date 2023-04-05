import React, { useState, useTransition } from "react";
import names from "../data.json";
const UseTransition = () => {
  const [query, setQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isPending, startTransition] = useTransition();
  const chageHandler = (e) => {
    setInputValue(e.target.value);
    startTransition(() => setQuery(e.target.value));
  };
  const filterName = names.filter((i) => {
    return i.first_name.includes(query) || i.last_name.includes(query);
  });
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={chageHandler}
        className="text-black"
      />
      {isPending && <p>updating the list</p>}
      {filterName.map((n) => {
        return (
          <p key={n.id}>
            {n.first_name} {n.last_name}
          </p>
        );
      })}
    </div>
  );
};

export default UseTransition;
