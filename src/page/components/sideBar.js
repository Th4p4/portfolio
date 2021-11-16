import { GiHamburgerMenu } from "react-icons/gi";
import { BsInfoCircle } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { RiFacebookCircleLine } from "react-icons/ri";
import { IoGridOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";

import "./sideBar.css";
import React from "react";

const SideBar = (props) => {
  console.log(props.name);

  // let btn = document.querySelector("#btn") 
  let sidebar = document.querySelector(".sidebar")
  const buttonClick = ()=>{
    console.log('hi')
    sidebar.classList.toggle('active')
  }

  return (
    <React.Fragment>
      <div className="sidebar">
          <div className="logo">
            <GiHamburgerMenu  id= "btn" onClick = {buttonClick}/>
          </div>
          <ul>
          <li>
            <a href="#">
            <i>
              <BsInfoCircle  size = "1.4rem" className ="icons" />
              </i>
              <span className="font-link">About</span>
            </a>
            <span className = "tooltip">About</span>
          </li>
          <li>
            <a href="#"><i>
              <BsInstagram size = "1.4rem" className ="icons" />
              </i>
              <span className="font-link">Instagram</span>
            </a>
            <span className = "tooltip">Instagram</span>
          </li>
          <li>
            <a href="#">
            <i>
              <RiFacebookCircleLine size = "1.7rem" className ="icons" />
              </i>
              <span className="font-link">Facebook</span>
            </a>
            <span className = "tooltip">Facebook</span>
          </li>
          <li>
            <a href="#">
              <i>
              <IoGridOutline size = "1.4rem" className ="icons"  />
              </i>
              <span className="font-link">Works</span>
            </a>
            <span className = "tooltip">Works</span>
          </li>
          <li>
            <a href="#">
              <i>
              <FiGithub size = "1.4rem" className ="icons" />

              </i>
              {/* <div>hi</div> */}
              <span className="font-link" >Github</span>
            </a>
            <span className = "tooltip">Github</span>
          </li>
          </ul>
      </div>
      <div className ="home_content">
      <div className = "text">Home</div>
      </div>
      </React.Fragment>
      
    // </div>
  );
};

export default SideBar;
