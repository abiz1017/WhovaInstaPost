import profile from "./profile.png";
import { FaRegComment, FaRegBookmark } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="row" style={{ marginTop: "0" }}>
      <div className="end-item">
        <div style={{ padding: "10px" }}>
          <AiOutlineHeart size={30}></AiOutlineHeart>
        </div>
        <div style={{ padding: "10px" }}>
          <FaRegComment size={30}></FaRegComment>
        </div>
        <div style={{ padding: "10px" }}>
          <FiShare size={30} />
        </div>
      </div>
      <div className="user-item"></div>
      <div className="end-item">
        <FaRegBookmark size={30}></FaRegBookmark>
      </div>
    </div>
  );
};
export default Footer;
