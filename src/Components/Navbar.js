import { Button, AutoComplete, Switch } from "antd";
import logo from "./logo/logo.png";
import back from "./logo/back.jpg";
import "./stylesheets/Navbar.css";
import { Link } from "react-router-dom";

import { AiFillHome } from "react-icons/ai";
import { BiCabinet } from "react-icons/bi";
import { FaRandom } from "react-icons/fa";

function Navbar() {
  return (
    <div className="background">
      <img src={logo} alt="img" id="logo" />
      <div className="list-background">
        <Link to="/">
          <Button className="list-background-button" value="Home">
            <AiFillHome
              style={{ position: "relative", top: "2px", marginRight: "10px" }}
            />
            Home
          </Button>
        </Link>
        <Link to="/Directory">
          <Button className="list-background-button">
            <BiCabinet
              style={{ position: "relative", top: "2px", marginRight: "10px" }}
            />
            Directory
          </Button>
        </Link>
        <Link to="/Card">
          <Button className="list-background-button">
            <FaRandom
              style={{ position: "relative", top: "2px", marginRight: "10px" }}
            />
            Random
          </Button>
        </Link>
      </div>
      <div className="list-search">
        <div className="list-search-container">
          <img id="searchLogo" src={back} />
        </div>
        <AutoComplete
          style={{ width: 450 }}
          placeholder="input here"
        ></AutoComplete>
      </div>
      <div>
        <Switch />
      </div>
    </div>
  );
}

export default Navbar;
