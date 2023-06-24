import "./style.css";
import { NavLink } from "react-router-dom";
import {useState} from 'react'
import CircleIcon from "@mui/icons-material/Circle";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";


export default function PostCard({ content, upVoteFunction, downVoteFunction }) {
  const {
    postId,
    username,
    name,
    picUrl,
    post,
    postDescription,
    upvotes,
    downvotes,
    tags,
    createdAt,
    comments,
    isBookmarked,
  } = content;
  const [votes, setVotes] = useState({upvotes:upvotes, downvotes:downvotes})
  const count = Number(votes.upvotes) - Number(votes.downvotes)
  console.log(count)
  return (
    <div key={postId} className="postCard">
      <div className="left">
       <div className="up" onClick={()=>{
        console.log(votes)
        setVotes(()=>(Number(votes.upvotes)+10));
        upVoteFunction(postId)}}>
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
          focusable="false"
          aria-hidden="true"
          viewBox="10 0 24 24"
          data-testid="ArrowDropUpOutlinedIcon"
        >
          <path d="m7 14 5-5 5 5H7z"></path>
        </svg>
       </div>
        
        <p>{Number(votes.upvotes) - Number(votes.downvotes)}</p>



        <div className="down" onClick={()=>{
           setVotes((votes.upvotes+10));
          downVoteFunction(postId)}}>
           <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
          focusable="false"
          aria-hidden="true"
          viewBox="10 10 24 24"
          data-testid="ArrowDropDownOutlinedIcon"
        >
          <path d="m7 10 5 5 5-5H7z"></path>
        </svg>
        </div>
       
      </div>
      <div className="right">
        <div className="header">
          <img src={picUrl} alt={username} />
          <span className="greyText">
            Posted by @<span className="highlighedText">{username}</span>{" "}
            <span className="dot">.</span> 1m{" "}
          </span>
        </div>
        <h4>{post}</h4>
        <div className="tags">
          {tags.map((item) => (
            <span className="tagPills">{item}</span>
          ))}{" "}
        </div>
        <p>{postDescription}</p>
        <div className="divider"></div>
        <div className="icons">
          <span>
            <NavLink to={`/post/${postId}`}>
              <ChatBubbleOutlineRoundedIcon />
            </NavLink>
          </span>

          <ShareRoundedIcon />
          <span
            className="bookMark"
            style={{
              background: isBookmarked
                ? "#5348c7"
                : "rgba(167, 167, 167, 0.813);",
            }}
          >
            <BookmarkBorderRoundedIcon />
          </span>
        </div>
      </div>
    </div>
  );
}
