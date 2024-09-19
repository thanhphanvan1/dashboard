import React from "react";
import "../styles/teacherList.css";
import { Image1 } from "../assets/image.png";

const teachers = [
  {
    image: Image1,
    name: "Phan Van Thanh",
    duration: "20 lesson",
    cost: "100000",
  },
];

const TeacherList = () => {
  return (
    <div className="teacher-list">
      <div className="list-header">
        <h2>Teachers</h2>
        <select name="" id="">
          <option value="english">English</option>
          <option value="english">Vietnamese</option>
        </select>
      </div>
    </div>
  );
};

export default TeacherList;
