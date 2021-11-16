import { GiHamburgerMenu } from "react-icons/gi";
import { BsInfoCircle } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { RiFacebookCircleLine } from "react-icons/ri";
import { IoGridOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";

import "./sideBar.css";

const SideBar = (props) => {
  console.log(props.name);

  return (
    // <div className="center">
      <div className="sidebar">
          <div className="logo">
            <GiHamburgerMenu  id= "btn" />
          </div>
          <ul>
          <li>
            <a href="#">
            <i>
              <BsInfoCircle  size = "1.4rem"/>
              </i>
              <span className="font-link">About</span>
            </a>
          </li>
          <li>
            <a href="#"><i>
              <BsInstagram size = "1.4rem" />
              </i>
              <span className="font-link">Instagram</span>
            </a>
          </li>
          <li>
            <a href="#">
            <i>
              <RiFacebookCircleLine size = "1.7rem"/>
              </i>
              <span className="font-link">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i>
              <IoGridOutline size = "1.4rem" />
              </i>
              <span className="font-link">Works</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i>
              <FiGithub size = "1.4rem" className ="icons" />

              </i>
              {/* <div>hi</div> */}
              <span className="font-link" >Github</span>
            </a>
          </li>
          </ul>
      </div>
    // </div>
  );
};

export default SideBar;
