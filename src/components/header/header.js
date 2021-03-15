import profile from "./profile.png";
import { FaEllipsisH } from "react-icons/fa";
const header = () => {
  return (
    <div className="header-row">
      <div
        className="img-item"
        style={{
          textAlign: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          src={profile}
          style={{
            border: "1px solid black",
            borderRadius: "50%",
            paddingTop: "10%",
          }}
          alt=""
          height="30"
        />
      </div>
      <div className="user-item">
        <strong>AlexBiz</strong>
        <p style={{ margin: "5px", marginLeft: "0px" }}>San Diego, CA</p>
      </div>

      <div className="end-item">
        <FaEllipsisH></FaEllipsisH>
      </div>
    </div>
  );
};
export default header;
