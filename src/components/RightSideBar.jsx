export default function RightSideBar(){
  return <div className="rightSide">
    <select name="latest" id="">
      <option value="latest">latest post</option>
      <option value="popular">Most Upvoted</option>
    </select>
  </div>
}