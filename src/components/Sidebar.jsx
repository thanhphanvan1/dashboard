import React from "react";
import {
  BiHome,
  BiBookAlt,
  BiMessage,
  BiSolidReport,
  BiStats,
  BiTask,
  BiHelpCircle,
} from "react-icons/bi";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="menu flex gap-4 height-[94vh] flex-col">
      <div className="logo">
        <BiBookAlt className="logo-icons" />
        <h2 className="">Educate</h2>
      </div>
      <div className="menu-list">
        <a href="#" className="item ">
          <BiHome className="icon" /> Dashboard
        </a>
        <a href="#" className="item">
          <BiTask className="icon" /> Assignments
        </a>
        <a href="#" className="item">
          <BiSolidReport className="icon" /> Report
        </a>
        <a href="#" className="item">
          <BiStats className="icon" /> Stats
        </a>
        <a href="#" className="item">
          <BiMessage className="icon" /> Message
        </a>
        <a href="#" className="item">
          <BiHelpCircle className="icon" /> Help Us
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
