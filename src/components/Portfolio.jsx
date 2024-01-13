import React from "react";
import TicTacToe from "../assets/TicTacToe.jpg";
import RockPaperScissor from "../assets/RockPaperScissor.png";
import RockPaperScissorr from "../assets/RockPaperScissorr.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      image: TicTacToe,
      href: "https://github.com/mdjamall/Tic-Tac-Toe-Game",
    },
    {
      id: 2,
      image: RockPaperScissorr,
      href: "https://github.com/mdjamall/Rock-Paper-Scissor-Game",
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full bg-gradient-to-b
   from-black to-gray-800 text-white md:h-screen"
    >
      <div
        className="max-w-screen-lg
       mx-auto flex flex-col p-4 justify-center  w-full h-full"
      >
        <div className="py-8">
          <p className="font-bold text-4xl border-b-4 inline border-yellow-600">
            Portfolio
          </p>
          <p className="py-6 text-xl">Check out some of my work right here !</p>
        </div>

        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {portfolios.map(({ id, image, href }) => (
            <a key={id} href={href} className="group-first:" target="_blank">
              <div className="shadow-md shadow-gray-600   hover:shadow-pink-600 rounded-lg ">
                <img
                  className="w-auto md:h-[180px] rounded-md hover:scale-105
             duration-200"
                  src={image}
                  alt=""
                />
                <div className="group flex items-center justify-center">
                  <button className="w-1/2 px-10 py-1 m-2 hover:scale-105 duration-200 text-xl  font-medium ">
                    Code
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
