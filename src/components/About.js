import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-blue-300">
      <div className="container bg-blue-300 mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white text-left">
            Data visualization, business intelligence developer and data
            engineer.
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed text-left">
            I wrangle data, develop analytical solutions and create data
            visualizations to uncover insights and tell stories in the data.
            Currently an Analytics Architect at Alaska Native Tribal Health
            Consortium.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Developer
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Fitness Instructor
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./CamieBackcountry.jpeg"
          />
        </div>
      </div>
    </section>
  );
}
