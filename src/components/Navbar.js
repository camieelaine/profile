//import { ArrowRightIcon } from "@heroicons/react/solid";
import Icon from '@material-ui/core/Icon';
import React from "react";
//bg-light-blue-500
export default function Navbar() {
  return (
    <header className="bg-blue-400 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Camie DeCovich
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Contact Me
          <Icon name="account_circle" size="xl" />
          {/* <ArrowRightIcon className="w-4 h-4 ml-1" /> */}
        </a>
      </div>
    </header>
  );
}
