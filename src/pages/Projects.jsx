import { useState } from "react";
import { getConfigData } from "../data/configReader";
import w from "../assets/w.png";
import uni from "../assets/uni.png";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import q from "../assets/q.png";
import chat from "../assets/chat.png";
import d from "../assets/d.png";
import K from "../assets/K.png";

import onwzeroonethree from "../assets/1013.png";


export default function Card() {
  const configData = getConfigData();
  const projects = configData.projects;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const svgClass = isHovered
    ? "w-6 h-6 text-gray-500 transition delay-150"
    : "w-6 h-6 text-gray-300";

  return (
    <>
      <div className="px-2">
        <div className="flex flex-col bg-gray-100 rounded-lg px-5 py-5 ">
          <div className="flex items-center justify-between mb-5">
            <div className="font-medium text-lg flex items-center gap-x-2">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
              Projects
            </div>
            
          </div>

          <div className="flex flex-col">
            {projects.map((project, index) => (
              <a
                key={index}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="drop-shadow-md card bg-white rounded-lg px-5 py-3 gap-x-3 flex flex-col md:flex-none md:flex-row hover:-translate-y-1 hover:scale-100 duration-300 transition ease-in-out delay-150 hover:shadow-sm border border-gray-200 hover:border-gray-300"
                href="https://cyroscorp.github.io/enter/"
              >
                <div className="rounded-full overflow-hidden flex items-center justify-center border border-gray-200  md:block">
                  <div className="card-image w-16 h-16 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={K}
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="font-medium text-lg">
                    Task Tracker
                  </h1>
                  <p className="text-gray-500 text-md">
                    reactjs + firebase + tailwindcss
                  </p>
                </div>
                <button className="ml-auto hidden md:inline-block">
                  <svg
                    className={svgClass}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </a>
            ))}
          </div>






          <div className="flex flex-col">
            {projects.map((project, index) => (
              <a
                key={index}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="drop-shadow-md card bg-white rounded-lg px-5 py-3 gap-x-3 flex flex-col md:flex-none md:flex-row hover:-translate-y-1 hover:scale-100 duration-300 transition ease-in-out delay-150 hover:shadow-sm border border-gray-200 hover:border-gray-300"
                href="https://akdimensia-1.vercel.app/"
              >
                <div className="rounded-full overflow-hidden flex items-center justify-center border border-gray-200  md:block">
                  <div className="card-image w-16 h-16 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                    src={chat}
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="font-medium text-lg">
                    {project["project-name"]}
                  </h1>
                  <p className="text-gray-500 text-md">
                    {project["project-desc"]}
                  </p>
                </div>
                <button className="ml-auto hidden md:inline-block">
                  <svg
                    className={svgClass}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </a>
            ))}
          </div>














          <div className="flex flex-col">
            {projects.map((project, index) => (
              <a
                key={index}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="drop-shadow-md card bg-white rounded-lg px-5 py-3 gap-x-3 flex flex-col md:flex-none md:flex-row hover:-translate-y-1 hover:scale-100 duration-300 transition ease-in-out delay-150 hover:shadow-sm border border-gray-200 hover:border-gray-300"
                href="https://cyroscorp.github.io/0"
              >
                <div className="rounded-full overflow-hidden flex items-center justify-center border border-gray-200  md:block">
                  <div className="card-image w-16 h-16 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={uni}
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="font-medium text-lg">
                    Ultimate Productivity App
                  </h1>
                  <p className="text-gray-500 text-md">
                    JS + Third party services
                  </p>
                </div>
                <button className="ml-auto hidden md:inline-block">
                  <svg
                    className={svgClass}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </a>
            ))}
          </div>

          <div className="flex flex-col">
            {projects.map((project, index) => (
              <a
                key={index}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="drop-shadow-md card bg-white rounded-lg px-5 py-3 gap-x-3 flex flex-col md:flex-none md:flex-row hover:-translate-y-1 hover:scale-100 duration-300 transition ease-in-out delay-150 hover:shadow-sm border border-gray-200 hover:border-gray-300"
                href="https://proectnight.vercel.app/"
              >
                <div className="rounded-full overflow-hidden flex items-center justify-center border border-gray-200  md:block">
                  <div className="card-image w-16 h-16 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={d}
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="font-medium text-lg">
                    Project
                  </h1>
                  <p className="text-gray-500 text-md">
                    Building from Design
                  </p>
                </div>
                <button className="ml-auto hidden md:inline-block">
                  <svg
                    className={svgClass}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </a>
            ))}
          </div>

















          <div className="flex flex-col">
            {projects.map((project, index) => (
              <a
                key={index}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="drop-shadow-md card bg-white rounded-lg px-5 py-3 gap-x-3 flex flex-col md:flex-none md:flex-row hover:-translate-y-1 hover:scale-100 duration-300 transition ease-in-out delay-150 hover:shadow-sm border border-gray-200 hover:border-gray-300"
                href="https://youtu.be/L2o21EHE0lo?si=MlcGs9hLDVNBc0hf"
              >
                <div className="rounded-full overflow-hidden flex items-center justify-center border border-gray-200  md:block">
                  <div className="card-image w-16 h-16 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={w}
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="font-medium text-lg">
                    LethalGun
                  </h1>
                  <p className="text-gray-500 text-md">
                    From Scratch
                  </p>
                </div>
                <button className="ml-auto hidden md:inline-block">
                  <svg
                    className={svgClass}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </a>
            ))}
          </div>


          
          <div className="flex flex-col">
            {projects.map((project, index) => (
              <a
                key={index}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="drop-shadow-md card bg-white rounded-lg px-5 py-3 gap-x-3 flex flex-col md:flex-none md:flex-row hover:-translate-y-1 hover:scale-100 duration-300 transition ease-in-out delay-150 hover:shadow-sm border border-gray-200 hover:border-gray-300"
                href="https://youtu.be/Tcax_MgGq2c?si=mZKnN9bDGMd7eED5"
              >
                <div className="rounded-full overflow-hidden flex items-center justify-center border border-gray-200  md:block">
                  <div className="card-image w-16 h-16 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={onwzeroonethree}
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="font-medium text-lg">
                    BattleBot
                  </h1>
                  <p className="text-gray-500 text-md">
                    From Scratch
                  </p>
                </div>
                <button className="ml-auto hidden md:inline-block">
                  <svg
                    className={svgClass}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </a>
            ))}
          </div>






          <div className="flex flex-col">
            {projects.map((project, index) => (
              <a
                key={index}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="drop-shadow-md card bg-white rounded-lg px-5 py-3 gap-x-3 flex flex-col md:flex-none md:flex-row hover:-translate-y-1 hover:scale-100 duration-300 transition ease-in-out delay-150 hover:shadow-sm border border-gray-200 hover:border-gray-300"
                href="https://cyroscorp.github.io/know"
              >
                <div className="rounded-full overflow-hidden flex items-center justify-center border border-gray-200  md:block">
                  <div className="card-image w-16 h-16 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={q}
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="font-medium text-lg">
                    Games
                  </h1>
                  <p className="text-gray-500 text-md">
                    JS
                  </p>
                </div>
                <button className="ml-auto hidden md:inline-block">
                  <svg
                    className={svgClass}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </a>
            ))}
          </div>




          <div className="flex flex-col">
            {projects.map((project, index) => (
              <a
                key={index}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="drop-shadow-md card bg-white rounded-lg px-5 py-3 gap-x-3 flex flex-col md:flex-none md:flex-row hover:-translate-y-1 hover:scale-100 duration-300 transition ease-in-out delay-150 hover:shadow-sm border border-gray-200 hover:border-gray-300"
                href="https://youtu.be/eFkRpNPVi3Q?si=GOMAC6CRx4JnTics"
              >
                <div className="rounded-full overflow-hidden flex items-center justify-center border border-gray-200  md:block">
                  <div className="card-image w-16 h-16 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={one}
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="font-medium text-lg">
                    Bluetooth Speakers
                  </h1>
                  <p className="text-gray-500 text-md">
                    Bluethooth Module
                  </p>
                </div>
                <button className="ml-auto hidden md:inline-block">
                  <svg
                    className={svgClass}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </a>
            ))}
          </div>




          <div className="flex flex-col">
            {projects.map((project, index) => (
              <a
                key={index}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="drop-shadow-md card bg-white rounded-lg px-5 py-3 gap-x-3 flex flex-col md:flex-none md:flex-row hover:-translate-y-1 hover:scale-100 duration-300 transition ease-in-out delay-150 hover:shadow-sm border border-gray-200 hover:border-gray-300"
                href="https://youtu.be/OncyRugf4oA?si=GECFYxD3ZynLauQi"
              >
                <div className="rounded-full overflow-hidden flex items-center justify-center border border-gray-200  md:block">
                  <div className="card-image w-16 h-16 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={two}
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="font-medium text-lg">
                    AgriculturalBot
                  </h1>
                  <p className="text-gray-500 text-md">
                    FromScratch
                  </p>
                </div>
                <button className="ml-auto hidden md:inline-block">
                  <svg
                    className={svgClass}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </a>
            ))}
          </div>





          <div className="flex flex-col">
            {projects.map((project, index) => (
              <a
                key={index}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="drop-shadow-md card bg-white rounded-lg px-5 py-3 gap-x-3 flex flex-col md:flex-none md:flex-row hover:-translate-y-1 hover:scale-100 duration-300 transition ease-in-out delay-150 hover:shadow-sm border border-gray-200 hover:border-gray-300"
                href="https://youtu.be/lFclHOe3kdM?si=Ef2-ykvlosmdIQag"
              >
                <div className="rounded-full overflow-hidden flex items-center justify-center border border-gray-200  md:block">
                  <div className="card-image w-16 h-16 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={three}
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="font-medium text-lg">
                    LethalCrossbow
                  </h1>
                  <p className="text-gray-500 text-md">
                    From Scratch
                  </p>
                </div>
                <button className="ml-auto hidden md:inline-block">
                  <svg
                    className={svgClass}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </a>
            ))}
          </div>



        </div>
      </div>
    </>
  );
}
