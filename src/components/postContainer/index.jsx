import "./style.css";


import CircleIcon from '@mui/icons-material/Circle';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';

export default function PostCard({content}){

const count =300;

  const {postId,username, name, picUrl, post, postDescription, upvotes, downvotes, tags, createdAt, comments, isBookmarked} = content;
  return <div key={postId}className="postCard">
     <div className="left">
      <ArrowDropUpOutlinedIcon/>
      <p>{count}</p>
      <ArrowDropDownOutlinedIcon/>
     </div>
     <div className="right">
      <div className="header">
        <img src={picUrl} alt={username} />
        <span className="greyText">Posted by @  <span className="highlighedText">{username}</span> <CircleIcon/> 1m </span>
      </div>
      <h4>{post}</h4>
      <div className="tags">{
        tags.map(item=> <span className="tagPills">{item}</span>)
      } </div>
      <p>
      {postDescription}
      </p>
      <hr/>
      <div className="icons">

     
      <ChatBubbleOutlineRoundedIcon/>
      <ShareRoundedIcon/>
      {
        isBookmarked?   <BookmarkRoundedIcon/>:<BookmarkBorderRoundedIcon/>
      }
   
 </div>

     </div>
  </div>
}