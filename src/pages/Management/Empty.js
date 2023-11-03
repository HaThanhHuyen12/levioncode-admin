import "./Empty.css";
import sadFace from "../../images/sadface.png";

function Empty() {
  return (
    <div className="Content">
      <div className="empty">
        <img src={sadFace} alt="img" />
        <p>Empty.</p>
      </div>
    </div>
  );
}
export default Empty;
