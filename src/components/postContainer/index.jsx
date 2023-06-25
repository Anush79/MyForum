import "./style.css";
import { NavLink } from "react-router-dom";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";

import { useData } from "../../context/dataContext";
export default function PostCard({ content }) {
const {upVoteFunction,downVoteFunction,bookMarkFunction} = useData()
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


  return (
    <div key={postId} className="postCard">
      <div className="left">
       <div className="up" onClick={()=>{
        upVoteFunction(postId)}}>
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root icon"
          focusable="false"
          aria-hidden="true"
          viewBox="10 0 24 24"
          data-testid="ArrowDropUpOutlinedIcon"
        >
          <path d="m7 14 5-5 5 5H7z"></path>
        </svg>
       </div>
        
        <p>{Number(upvotes) - Number(downvotes)}</p>



        <div className="down" onClick={()=>{
          downVoteFunction(postId)}}>
           <svg 
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root icon"
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
            <span className="dot">.</span> <span className="greyText">1m</span>
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
          <span className="icon" >
            <NavLink to={`/post/${postId}`}>
              <ChatBubbleOutlineRoundedIcon />
            </NavLink>
          </span>

          <ShareRoundedIcon />
          <span
            className="bookMark icon"
            onClick={()=>{bookMarkFunction(postId)}}
            style={{
              color: isBookmarked 
                ? "#5348c7"
                : "",
            }}
          >
            <BookmarkBorderRoundedIcon  style={{
              color: isBookmarked 
                ? "#5348c7"
                : "",
            }} />
          </span>
        </div>
      </div>
    </div>
  );
}
