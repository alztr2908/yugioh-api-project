import { Anchor, Button } from "antd";
import logo from "./logo/logo.png";
import "./stylesheets/Navbar.css";
import { AiFillHome } from "react-icons/ai";
import { BiCabinet } from "react-icons/bi";
import { FaRandom } from "react-icons/fa";

const { Link } = Anchor;

function Navbar() {
  return (
    <div className="background">
      <img src={logo} alt="img" />
      <div className="list-background">
        <Button className="list-background-button">
          <AiFillHome
            style={{ position: "relative", top: "2px", marginRight: "10px" }}
          />
          Home
        </Button>
        <Button className="list-background-button">
          <BiCabinet
            style={{ position: "relative", top: "2px", marginRight: "10px" }}
          />
          Directory
        </Button>
        <Button className="list-background-button">
          <FaRandom
            style={{ position: "relative", top: "2px", marginRight: "10px" }}
          />
          Random
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
