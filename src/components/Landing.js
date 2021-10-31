//import H2 from "@material-tailwind/react/Heading2";
//import LeadText from "@material-tailwind/react/LeadText";
import React from "react";

export default function Landing() {
  return (
    <div className="relative pt-16 pb-32 flex content-center justify-center h-screen">
      <div className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-full" />

      <div className="container max-w-8xl absolute mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white text-left">
              Data visualization, business intelligence and data engineer.
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed text-left">
              I wrangle data, develop analytical solutions and create data
              visualizations to uncover insights and tell stories. Currently an
              Analytics Architect at Alaska Native Tribal Health Consortium.
            </p>
            {/* <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                Developer
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              >
                Fitness Instructor
              </a>
            </div> */}
          </div>
          {/*           <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-left">
            <h1 class="text-4xl font-light leading-tight text-white header-sub-title wow fadeInUp">
              Hi, I'm Camie.
            </h1>
            <div className="mb-3 text-4xl font-bold text-white header-title wow fadeInUp">
              <h1 color="gray-200">
                Click on the classes link above to join me in a workout. Click
                on the portfolio link to view my work.
              </h1>
            </div>
            <div className="w-full lg:w-6/12 pt-100 ml-auto mr-auto text-center"></div>
          </div> */}
        </div>
      </div>
      <div className="w-full lg:w-6/12 pt-100 ml-auto mr-auto text-center">
        <p>Hello</p>
      </div>
    </div>
  );
}
