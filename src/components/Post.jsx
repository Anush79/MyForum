import {useParams, NavLink} from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PostCard from './postContainer/index'
import CommentCard from './commentCard'
import { useData } from '../context/dataContext';
export default function Post(){

const {id}=useParams()
const {forumDataState, bookMarkFunction} = useData()
const foundPost= forumDataState?.posts.find(item=>item.postId=== id)

  return <div className="postPage">

  <h2> <span><NavLink to={`/`}> <ArrowBackIcon/></NavLink> </span> Post</h2>
    <PostCard content={foundPost} />
    
      {foundPost.comments.map(item=>  <CommentCard content={item}/>)}
    
  
  </div>
}