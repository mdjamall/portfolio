import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full  h-full bg-gradient-to-b from-black to-gray-900 p-4 text-white"
    >
      <div className="flex h-full  flex-col p-4 justify-center mx-auto max-w-screen-lg">
        <div className="pb-8 ">
          <p className="text-4xl font-semibold border-b-4 inline border-yellow-400">
            Contact
          </p>
          <p className="py-6 font-medium text-xl ">
            Submit the form below to get in touch with me{" "}
          </p>
        </div>

        <div
          className="flex flex-col justify-center
        items-center"
        >
          <form
            action="https://getform.io/f/4e1522a3-faa5-427d-afe6-cdf498e6a5c2"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-cyan-700"
              placeholder="Enter your name"
            />
            <input
              type="text"
              name="email"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-cyan-700"
              placeholder="Enter your email"
            />
            <textarea
              name="messege"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-cyan-700"
              placeholder="Enter your messege"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-600 to-cyan-400 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-200 hover:to-cyan-600 ">
              Let's Chat
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
