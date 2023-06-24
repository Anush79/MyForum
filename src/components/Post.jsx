import {useParams, NavLink} from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PostCard from './postContainer/index'
import CommentCard from './commentCard'
 import { forumData } from '../data'
export default function Post(){
const {id}=useParams()
console.log(id)
const foundPost= forumData?.posts.find(item=>item.postId=== id)

  return <div className="postPage">

  <h2> <span><NavLink to={`/`}> <ArrowBackIcon/></NavLink> </span> Post</h2>
    <PostCard content={foundPost} />
    
      {foundPost.comments.map(item=>  <CommentCard content={item}/>)}
    
  
  </div>
}