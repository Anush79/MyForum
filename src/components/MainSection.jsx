import { useState } from "react";
import { forumData } from "../data";
import PostCard from "./postContainer/index";
export default function Main() {
  const [forumDataState, setForumDataState] = useState(forumData.posts);

  const upVoteFunction = (id) => {
    const found = forumDataState.map((item) => {
      return item.postId === Number(id)
        ? { ...item, upvotes: item.upvotes + 100 }
        : item;
    });
    setForumDataState([...found]);
  };
  const downVoteFunction = (id) => {
    const found = forumDataState.map((item) => {
      return item.postId === Number(id)
        ? { ...item, downvotes: item.downvotes - 100 }
        : item;
    });
    setForumDataState([...found]);
  };

  console.log(forumDataState)
  return (
    <div className="main">
      <h2>Latest Posts</h2>

      <div className="forumContainer">
        {forumDataState.map((item) => (
          <PostCard
            content={item}
            upVoteFunction={upVoteFunction}
            downVoteFunction={downVoteFunction}
          />
        ))}
      </div>
    </div>
  );
}
