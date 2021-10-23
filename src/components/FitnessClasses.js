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
    
    <section id="fitnessClasses" className="pb-20 bg-blue-400 mt-32 ">
      
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
        <div className="container max-w-7xl px-4">
        <div className="flex flex-wrap relative z-50">
        {fitnessClasses.map((fitnessClass) => (
          
         <div className="w-full rounded-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
           <li className="px-6">
          <Card>
          <CardContent>

          <Icon>{fitnessClass.icon}</Icon>
       
           
            <img className="w-45 h-45 mx-auto" alt={fitnessClass.format} src={fitnessClass.image} />
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
                  <div className="p-4 ">
                    <div className="p-3 text-left inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full bg-red-500">
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

      
      <section className="relative py-16 bg-gray-100">
      {fitnessClasses.map((fitnessClass) => (
      <div className="container max-w-7xl px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                <div className="relative">
                  <div className="w-40 -mt-20">
                 <img className="w-32 h-32 rounded-full mx-auto"
                      src={fitnessClass.image}
                      alt={fitnessClass.format}
                      raised
                      rounded
                    />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:self-center flex justify-center mt-10 lg:justify-end lg:mt-0">
                <button color="lightBlue" ripple="light">
                  Connect
                </button>
              </div>
              <div className="w-full lg:w-4/12 px-4 lg:order-1">
                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                      32
                    </span>
                    <span className="text-sm text-gray-700">Technologies</span>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                      3
                    </span>
                    <span className="text-sm text-gray-700">
                      Fitness Formats
                    </span>
                  </div>
                  <div className="lg:mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                      5
                    </span>
                    <span className="text-sm text-gray-700">Hobbies</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center my-8">
              <h1 color="gray">{fitnessClass.format}Camie DeCovich</h1>
              <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                <Icon name="place" size="xl" />
                {fitnessClass.format}Wasilla, Alaska
              </div>
              <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
                <Icon name="work" size="xl" />
                {fitnessClass.cert}Analytics Architect - Visualization Developer
              </div>
              <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                <Icon name="account_balance" size="xl" />
                {fitnessClass.cert} University of Computer Science
              </div>
            </div>

            <div className="mb-10 py-2 border-t border-gray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                  <h1 color="blueGray">
                    A developer with a range of skills and a wellness
                    enthusiast, when I am not coding an analytics solution you
                    can find me teaching a yoga class or biking in the mountains
                    with my family.
                  </h1>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <button color="lightBlue" buttonType="link" ripple="dark">
                      Show more
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
       ))}
    </section>
    </section>
    
  );
}
