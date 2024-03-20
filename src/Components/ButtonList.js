import React from "react";
import { Buttons } from "./Buttons";

const ButtonList = () => {
  const list = [{
    id:"1",
    name:"All"
  },
  {
    id:"2",
    name:"Cricket"
  },
  {
    id:"3",
    name:"Cooking"
  },
  {
    id:"4",
    name:"Dance"
  },
  {
    id:"5",
    name:"Forcasting"
  }];

  return (
    <div className="flex">
      {list.map((btn_list) => {
        return (
          <div key={btn_list.id}>
            <Buttons {...btn_list.name} />
          </div>
        );
      })}
    </div>
  );
};

export default ButtonList;
