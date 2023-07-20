import { BriefcaseIcon } from "@heroicons/react/20/solid";
import React from "react";
import { internships } from "../data";

export default function Internships() {
    return (
      <section id="skills">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-20">
            <BriefcaseIcon className="w-10 inline-block mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Work Experience
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Hands on work experience in the market with my academic skills.
            </p>
          </div>
          
          <div className="flex flex-wrap -m-4">
            {internships.map((Internship) => (
              <div
                className=" w-100 p-4"> {/*sm:w-1/2*/}
                <div className="flex relative">
                  <div className="px-8 py-10 relative z-9 w-full border-4 border-gray-800 bg-gray-900">
                    <h1 className="title-font sm:text-3xl text-2xl font-medium text-white mb-3">
                      {Internship.title} 
                    </h1>
                    <h2 className="title-font text-sm font-medium text-white mb-3">
                      {Internship.company}, {Internship.location}.
                    </h2>
                    <p className="leading-relaxed text-xs">{Internship.start} to {Internship.end}</p>
                    <div className="mt-4 mb-4">{Internship.description.map((item) => (
                      <p className="leading-relaxed">• {item}</p>
                    ))}</div>
                    <p className="leading-relaxed text-white">Skills: {Internship.skills}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    );
  }