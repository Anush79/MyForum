export default function RightSideBar(){
  return <div className="rightSide">
    <div className="custom-select" >
       <select name="latest" id="">
      <option value="latest">latest post</option>
      <option value="popular">Most Upvoted</option>
    </select>
    </div>
   
  </div>
}