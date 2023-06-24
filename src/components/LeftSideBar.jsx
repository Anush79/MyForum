import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import RocketOutlinedIcon from '@mui/icons-material/RocketOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';

export default function LeftSideBar(){
  return <div className="leftSide">
    <div className="home"><HomeOutlinedIcon/>Home</div>
    <div className="explore"><RocketOutlinedIcon/>Explore</div>
    <div className="bookMarks"><BookmarkBorderRoundedIcon/>Bookmarks</div>
    <div className="profile"><AccountCircleOutlinedIcon/>Profile</div>
  </div>
}