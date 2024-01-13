import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import java from "../assets/java.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import git from "../assets/git.png";
import msyql from "../assets/mysql.png";

const Skills = () => {
  const skills = [
    {
      id: 1,
      src: html,
      title: "Html",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: java,
      title: "Java",
      style: "shadow-red-500",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-cyan-500",
    },
    {
      id: 6,
      src: react,
      title: "ReactJs",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: msyql,
      title: "MySQL",
      style: "shadow-blue-600",
    },
    {
      id: 8,
      src: git,
      title: "Git",
      style: "shadow-orange-500",
    },
  ];

  return (
    <div
      name="skills"
      className="w-full  bg-gradient-to-b
   from-gray-800 h-full to-black "
    >
      <div className="max-w-screen-lg h-full flex flex-col p-4 mx-auto justify-center text-white w-full ">
        <div>
          <p className="text-4xl font-bold border-b-4 inline border-yellow-500">
            Skills
          </p>
          <p className="py-6 font-medium text-xl">
            These are the technologies I've worked with !
          </p>
        </div>

        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img className="w-20 mx-auto " src={src} alt="" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
