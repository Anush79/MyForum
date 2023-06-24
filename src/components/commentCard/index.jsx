import './style.css'
import CircleIcon from '@mui/icons-material/Circle';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';

export default function CommentCard({ content, replyingTo }) {

  const {
    commentId,
      fullName,
      username,
      picUrl,
      likes,
      comment,
      createdAt,
  }= content;
  return <div key={commentId} className="commentCard postCard">
    
       <img src={picUrl} alt={username} width="50px"/>
       <div className="rightSection">
        <p>
        <b>{fullName} </b> <span className="greyText"> {username}</span><span className="dot">.</span> 1m
</p>
<p>Replying to @
  <span className="highlighted">
  {replyingTo}</span></p>
  <p>{comment}</p>
<div className="icons">
  <FavoriteBorderRoundedIcon></FavoriteBorderRoundedIcon>
  <ChatBubbleOutlineRoundedIcon></ChatBubbleOutlineRoundedIcon>
  <ShareRoundedIcon></ShareRoundedIcon>
</div>
       </div>
  </div>

}
