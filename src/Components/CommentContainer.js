import React from "react";
import { commentData } from "../Utils/commentData";
import Comments from "./Comments";

const CommentList = ({ comment }) => {
  return comment?.map((list) => ( //?. because initially comment is empty so it is not able to map
    <div>
      <Comments key={list.name} data={list} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList comment={list.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="p-2 m-5">
      <h1 className="font-bold text-l">Comments:</h1>
      <CommentList comment={commentData} />
    </div>
  );
};

export default CommentContainer;
