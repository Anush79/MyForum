
import { useData } from "../context/dataContext"

export default function RightSideBar(){
  const {forumDispatch}= useData()
  return <div className="rightSide">
    <h2>Sort By</h2>
    <div className="custom-select" >
       <select name="latest" id="" onChange={(e)=>{console.log(e.target.value);forumDispatch({type: e.target.value, payload: ""})}}>
      <option value="filter">Select Filter</option>
      <option value="LATEST">🆕Latest Posts</option>
      <option value="POPULAR">🔝Most Upvoted</option>
    </select>
    </div>
   
  </div>
}