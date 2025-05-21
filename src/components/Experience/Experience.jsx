import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[8vw] font-sans bg-skills-gradient clip-path-custom-2 relative"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Vertical timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[10rem] sm:top-[17rem] h-[calc(100%-10rem)] sm:h-[calc(100%-12rem)] w-[4px] bg-white z-0"></div>

      {/* Experience Entries */}
      <div className="flex flex-col space-y-20 relative z-10">
        {experiences.map((experience, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={experience.id}
              className={`flex flex-col sm:flex-row items-center ${
                isLeft ? "sm:justify-start" : "sm:justify-end"
              } relative`}
            >
              {/* Card */}
              <div
                className={`w-full sm:w-[45%] p-6 sm:p-8 rounded-2xl shadow-xl bg-gray-900 border border-white backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105 ${
                  isLeft ? "sm:mr-auto" : "sm:ml-auto"
                }`}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-white">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-sm text-gray-300">{experience.company}</h4>
                    <p className="text-xs text-gray-500">{experience.date}</p>
                  </div>
                </div>

                <p className="text-gray-400">{experience.desc}</p>

                <div className="mt-4">
                  <h5 className="font-medium text-white">Skills:</h5>
                  <ul className="flex flex-wrap mt-2">
                    {experience.skills.map((skill, index) => (
                      <li
                        key={index}
                        className="bg-[#8245ec] text-gray-300 px-3 py-1 text-xs rounded-lg mr-2 mb-2 border border-gray-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Circle on the vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 bg-white border-4 border-[#8245ec] rounded-full flex justify-center items-center z-20">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-3/4 h-3/4 object-contain rounded-full"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
