
import { useData } from "../";
import PostCard from "./postContainer/index";
export default function Main() {
const {forumDataState}=useData()
  return (
    <div className="main">
      <h2>Latest Posts</h2>

      <div className="forumContainer">
        {forumDataState?.posts.map((item) => (
          <PostCard
            content={item}
          />
        ))}
      </div>
    </div>
  );
}
