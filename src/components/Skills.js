import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
import Icon from "@material-ui/core/Icon";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <Icon
            name="self_improvement"
            size="xl"
            className="w-10 inline-block mb-4"
          />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-600 mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base text-gray-500 text-left leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Below are skills I have in my current toolbox.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-light-blue-500 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
