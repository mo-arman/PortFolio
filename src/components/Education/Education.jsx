import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[8vw] md:px-[10vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-white tracking-wide">
          EDUCATION
        </h2>
        <div className="w-20 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto font-medium">
          A brief journey through my academic and professional learning
          experiences.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#8245ec] to-white h-full z-0"></div>

        {/* Timeline Entries */}
        {education.map((edu, index) => {
          const isLeft = index % 2 !== 0;

          return (
            <div
              key={edu.id}
              className={`relative mb-20 flex flex-col sm:flex-row items-center justify-between w-full ${
                isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-[#8245ec] w-14 h-14 rounded-full z-10 flex items-center justify-center shadow-lg">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Card */}
              <div
                className={`w-full sm:w-1/2 px-6 mt-12 sm:mt-0 ${
                  isLeft ? "sm:pr-12" : "sm:pl-12"
                }`}
              >
                <div className="p-6 rounded-2xl shadow-xl border border-gray-700 bg-gray-900 backdrop-blur-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-[1.03]">
                  {/* Header */}
                  <div className="flex items-center space-x-6">
                    <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                      <img
                        src={edu.img}
                        alt={edu.school}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {edu.degree}
                      </h3>
                      <h4 className="text-sm text-gray-300">{edu.school}</h4>
                      <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                    </div>
                  </div>

                  {/* Grade and Description */}
                  <p className="mt-4 text-sm text-gray-400 font-semibold">
                    Status: {edu.grade}
                  </p>
                  <p className="mt-2 text-sm text-gray-400">{edu.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
