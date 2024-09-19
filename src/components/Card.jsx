import React from "react";
import { BiLogoHtml5, BiLogoAndroid, BiBuilding } from "react-icons/bi";
import "../styles/content.css";

const courses = [
  {
    title: "Web Development",
    icon: <BiLogoHtml5 />,
  },
  {
    title: "App Development",
    icon: <BiLogoAndroid />,
    duration: "2 Hours",
  },
  {
    title: "UX & UI",
    icon: <BiBuilding />,
    duration: "2 Hours",
  },
];

const Card = () => {
  return (
    <div className="card-container">
      {courses.map((item) => (
        <div className="card">
          <div className="card-cover">{item.icon}</div>
          <div className="card-title">
            <h3>{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
