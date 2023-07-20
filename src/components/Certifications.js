import { CheckBadgeIcon, DocumentTextIcon } from "@heroicons/react/20/solid";
import React from "react";
import { certificates } from "../data";

export default function Certifications() {
    return (
      <section id="skills">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-20">
            <DocumentTextIcon className="w-10 inline-block mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Certifications &amp; Learning Paths
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              These are the courses I've completed. And the learning is still in progess.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {certificates.map((certificate) => (
              <div key={certificate.title} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <CheckBadgeIcon className="text-blue-400 w-6 h-6 flex-shrink-0 mr-4" />
                  <a
                    href={certificate.url} 
                    className="title-font font-medium text-white">
                    {certificate.title}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }