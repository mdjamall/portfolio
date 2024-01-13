import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-900 to-black
    text-white  "
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full">
        <div className=" pb-8">
          <p className="text-4xl font-semibold border-b-4 inline  border-b-yellow-600 hover:border-blue-800">
            About
          </p>
        </div>
        <p className="text-xl mt-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem saepe
          vel omnis, aliquam fuga, laboriosam quos repudiandae laborum, neque
          dolorum eum ad dignissimos optio unde.
        </p>
        <br />
        <p className="text-xl mt-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
          voluptatem nostrum officiis id et reiciendis possimus deserunt dolor
          repellendus at! Animi omnis architecto, at voluptas voluptate illum
          velit vero modi, aliquam ab eum vitae ipsum reiciendis! Voluptatibus
          labore esse provident odio minus reiciendis, itaque magnam!
        </p>
      </div>
    </div>
  );
};

export default About;
