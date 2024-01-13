import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialMedia = () => {
  const links = [
    {
      id: 1,
      name: "GitHub",
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/mdjamall",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      name: "LinkedIn",
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/md-jamal-ansari-6a413b1b0/",
    },
    {
      id: 3,
      name: "GMail ",
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:mdjamalansari45@gmail.com",
    },
    {
      id: 4,
      name: "Resume",
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://github.com/mdjamall",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="lg:flex hidden flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, name, child, href, style }) => (
          <li
            key={id}
            className={
              " flex justify-between items-center px-4  w-40 h-14 bg-gradient-to-r from-cyan-400 to-slate-600 ml-[-100px] hover:ml-[-10px] duration-300 hover:rounded-md font-semibold cursor-pointer" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center text-white w-full"
              target="_blank"
            >
              {name} {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
