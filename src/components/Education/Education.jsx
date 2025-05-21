import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0"></div>

        {/* Timeline Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative mb-20 flex items-center justify-between w-full ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 rounded-full z-10 flex items-center justify-center">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Card */}
            <div className={`w-full sm:w-1/2 px-6 ${index % 2 === 0 ? "pl-12" : "pr-12"}`}>
              <div className="p-6 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105">
                {/* Top Flex Row */}
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
                    <h4 className="text-md text-gray-300">{edu.school}</h4>
                    <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                  </div>
                </div>

                <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
                <p className="mt-4 text-gray-400">{edu.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
