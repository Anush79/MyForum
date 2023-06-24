
import {forumData} from '../data'
import PostCard from './postContainer/index'
export default function Main(){
  return <div className="main">
    <h2>Latest Posts</h2>
    <div className="forumContainer">
      {
        forumData?.posts?.map(item=><PostCard content={item}/>)
      }
    </div>
  </div>
}