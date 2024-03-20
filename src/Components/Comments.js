import React from "react";
// import { commentData } from '../Utils/commentData'

const Comments = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-md bg-slate-200 p-3 my-2">
      <img
        className="w-8 h-8"
        src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
        alt="comment"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <pre>{text}</pre>
      </div>
    </div>
  );
};

export default Comments;
