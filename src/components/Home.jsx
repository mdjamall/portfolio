import React from "react";
import HeroImage from "../assets/HeroImage.png";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-900"
    >
      <div className="h-full max-w-screen-lg flex flex-col md:flex-row justify-center items-center px-4 mx-auto">
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-white text-4xl sm:text-6xl font-bold">
            I'm a Web Developer
          </h2>
          <p className="text-slate-500 py-4 max-w-md">
            I am highly motivated, adaptable, and ready to take on new
            challenges in a collaborative and growth-oriented environment. My
            commitment to delivering clean and efficient code, coupled with my
            dedication to staying current with emerging technologies, positions
            me as a promising candidate in the ever-evolving field of web
            development{" "}
          </p>

          <div className="flex flex-initial">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white flex justify-center items-center w-fit px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-700 rounded-l-xl font-semibold cursor-pointer "
            >
              Potfolio
              <span className="px-1 group-hover:rotate-90 duration-300 group-hover:text-black">
                <FaAngleRight size={20} />
              </span>
            </Link>
          </div>
        </div>

        <div className="">
          <img
            className="rounded w-2/3 mx-auto md:w-fit md:h-full "
            src={HeroImage}
            alt="my portfolio"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
