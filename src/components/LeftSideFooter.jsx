export default function Footer({ content }) {
  return <div className="footer">
    <img src={content.picUrl} alt="" />
    <div className="namediv">
      <b>{content.name}</b>
      <p>@{content.username}</p>
    </div>
  </div>
}