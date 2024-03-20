import React from "react";

export const Buttons = ({ name }) => {
  return (
    <div>
      <button className="px-5 py-2 m-5 rounded-md bg-slate-400 text-stone-950">
        {name}
      </button>
    </div>
  );
};
