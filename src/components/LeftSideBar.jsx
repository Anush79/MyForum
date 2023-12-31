import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import RocketOutlinedIcon from '@mui/icons-material/RocketOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import Footer from './LeftSideFooter';
import { forumData } from '../data';
export default function LeftSideBar() {
  return <div className="leftSide"> 
    <div>
   
      <div className="home icon"><HomeOutlinedIcon />Home</div>
      <div className="explore icon"><RocketOutlinedIcon />Explore</div>
      <div className="bookMarks icon"><BookmarkBorderRoundedIcon />Bookmarks</div>
      <div className="profile icon"><AccountCircleOutlinedIcon />Profile</div>
    </div>
    <div>
      <Footer content={forumData} />
    </div>

  </div>
}