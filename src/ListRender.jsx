import React from "react";

const ListRender = () => {
  const superHeros = ["ironman", "spiderman", "batman", "antman"];
  return (
    <div className="mt-10">
      {superHeros.map((s) => {
        return <h2 key={s}>{s}</h2>;
      })}
    </div>
  );
};

export default ListRender;
