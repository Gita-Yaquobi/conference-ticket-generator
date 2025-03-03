import style from "./Ticket.module.css";
import Svg from "../../assets/images/pattern-ticket.svg";
import Logo from "../../assets/images/logo-full.svg";
// import Avatar from "../../assets/images/image-avatar.jpg";
import Github from "../../assets/images/icon-github.svg";
export default function Ticket({ name, github, img }) {
  return (
    <div className={`colMd4 col ${style.ticket}`}>
      <img src={Svg} style={{ width: "100%", height: "auto" }} alt="img"></img>
      <div className={style.inTicketLeft}>
        <div style={{ marginTop: "20px" }}>
          <img src={Logo} alt="logo" style={{}} />
          <span className="textSm text-500" style={{ marginLeft: "45px" }}>
            hello world
          </span>
        </div>
        <div
          style={{
            marginBottom: "20px",
          }}
          className="flex"
        >
          <img
            src={img}
            alt="avatar"
            style={{ width: "60px", height: "60px", borderRadius: "10px" }}
          ></img>
          <div
            style={{
              margin: "3px 0 3px 5px",
            }}
            className="flexBetween flexColumn"
          >
            <span className="textLg">{name}</span>
            <div className="flexCenter">
              <img src={Github} alt="githum" />
              <span className="textSm text-500" style={{ marginLeft: "5px" }}>
                {github}{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={style.inTicketRight}>
        <span
          className="textLg text-500"
          style={{ textOrientation: "upright", transform: "rotate(90deg)" }}
        >
          #56802
        </span>
      </div>
    </div>
  );
}
