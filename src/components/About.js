import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-blue-gray-800 ">
      <div className="container bg-blue-gray-800  mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white text-left">
            Who am I?
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 text-xl leading-relaxed text-left">
            Thank you for reading my story. I have a range of frontend, backend
            and project management skills. My current tool set includes, data
            analytics tools (Tableau, Qlik, PowerBI), custom front end
            development (React.js, D3.js, Python Jupyter Notebooks, JavaScript)
            and writing SQL to build data marts within an MS SQL Server
            enterprise data warehouse.{" "}
          </p>
          <p className="mb-8 text-xl leading-relaxed text-left">
            For the past five years I have been building business intelligence
            solutions for users of the Cerner Electronic Health Records
            platform. This includes interactive analytical tools, dashboards and
            automated reporting.{" "}
          </p>
          <p className="mb-8 text-xl leading-relaxed text-left">
            I have a Master of Science in Information Technology and a Bachelor
            of Business Administration in Marketing. I am also certified Scrum
            Master and hold a past certification in business analysis with IIBA.
            I am committed to lifelong learning and regularly take courses on
            Coursera and Udemy to continue to grow and improve my skills.{" "}
          </p>
          <p className="mb-8 text-xl leading-relaxed text-left">
            I have a passion for for problem-solving and satisfying customer
            needs. There is nothing better than hearing a user joyfully exclaim,
            "You are going to save me so much time!"{" "}
          </p>
          <p className="mb-8 text-xl leading-relaxed text-left">
            When I am not working on a solution to turn data into a story, you
            can find me teaching a yoga class or skiing and biking in the
            mountains with my family. I appreciate your time in reading this
            letter and reviewing my profile. I look forward to connecting in the
            future.
          </p>
          {/*  <div className="flex justify-center">
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
          </div> */}
        </div>
      </div>
    </section>
  );
}
