import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <nav className="flex justify-between bg-black h-20 text-white items-center w-full px-4 fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Jamal</h1>
      </div>
      <ul className="hidden sm:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 font-medium text-gray-500 cursor-pointer hover:scale-105 duration-200 hover:text-white capitalize "
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="sm:hidden cursor-pointer z-10 pr-3 hover:scale-105 hover:duration-200 hover:text-white text-gray-400"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center top-0 left-0 absolute w-full h-screen text-gray-500 bg-gradient-to-b from-black to-gray-800 capitalize ">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="text-4xl capitalize cursor-pointer py-4
            hover:scale-105 duration-200 hover:text-white px-4 "
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
