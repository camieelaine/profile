import React from "react";
/* import {
  BellIcon,
  EyeIcon,
  SunIcon,
  TerminalIcon,
  UsersIcon,
} from "@heroicons/react/solid";*/
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';
import { fitnessClasses } from "../data";

export default function FitnessClasses() {
  return (
    <section id="fitnessClasses" className="pb-20 bg-blue-400 mt-32">
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
        <div className="container max-w-7xl px-4">
        <div className="flex flex-wrap relative z-50">
        {fitnessClasses.map((fitnessClass) => (
         <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
           <li className="px-6">
          <Card>
          <CardContent>

          <Icon>{fitnessClass.icon}</Icon>
       
           
            <img alt={fitnessClass.format} src={fitnessClass.image} />
            <h1 color="gray">{fitnessClass.format}</h1>
            <p color="gray">{fitnessClass.cert}</p>
          </CardContent>
         

          </Card>
          </li>
          </div>
          ))}
        </div>
        </div>
        </div>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
      
        <div className="container max-w-7xl px-4">
          <div className="flex flex-wrap relative z-50">
            {fitnessClasses.map((fitnessClass) => (
              <div className="w-full md:w-4/12 px-4 flex justify-center text-center">
                <div className="w-full bg-white rounded-xl overflow-hdden shadow-md p-4 undefined">
                  <div className="p-4 undefined">
                    <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full bg-red-500">
                      <span class="text-white text-xl leading-none">
                      <Icon name="star" size="xl" />
                      
                        {/* <SelfImprovementIcon /> */}
                      </span>
                      <h1 class="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">
                        {fitnessClass.format}
                      </h1>
                      <p class="text-gray-700 text-base font-light leading-relaxed mt-0 mb-4">
                        {fitnessClass.cert}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Break */}
      </div>

      <div className="container px-5 py-10 mx-auto text-center">
        <Icon name="self_improvement" className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Class Formats I Teach
        </h1>
        <div className="flex flex-wrap m-4">
          {fitnessClasses.map((fitnessClass) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <Icon name="self_improvement" className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">{fitnessClass.format}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="class"
                    src={fitnessClass.image}
                    className="w-32 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {fitnessClass.cert}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {fitnessClass.cert}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
