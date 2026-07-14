"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaKey,
  FaLock,
  FaCreditCard,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiJsonwebtokens,
  SiAuth0,
  SiGoogle,
  SiPostman,
} from "react-icons/si";
const skills = [
  { name: "HTML5", icon: <FaHtml5 size={40} /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} /> },
  { name: "JavaScript (ES6+)", icon: <FaJs size={40} /> },
  { name: "React.js", icon: <FaReact size={40} /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} /> },
  { name: "Node.js", icon: <FaNodeJs size={40} /> },
  { name: "Express.js", icon: <SiExpress size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
  { name: "Git & GitHub", icon: <FaGithub size={40} /> },

  { name: "JWT Authentication", icon: <SiJsonwebtokens size={40} /> },
  { name: "NextAuth.js", icon: <SiAuth0 size={40} /> },
  { name: "Google OAuth", icon: <SiGoogle size={40} /> },
  { name: "bcrypt Security", icon: <FaLock size={40} /> },
  { name: "REST APIs", icon: <FaKey size={40} /> },
  { name: "Payment Gateway", icon: <FaCreditCard size={40} /> },
];


export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 lg:py-28 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            My Skills
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            A collection of technologies and tools I use to build responsive user interfaces, scalable backend systems, secure authentication flows, and production-ready web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
                bg-white
                rounded-2xl
                p-6
                border
                border-slate-200
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                hover:border-yellow-400
                transition-all
                duration-300
                text-center
                cursor-pointer
              "
            >
              <div className="flex justify-center text-yellow-500 mb-4">
                {skill.icon}
              </div>

              <h3 className="font-semibold text-slate-800">
                {skill.name}
              </h3>
            </div>
          ))}

        </div>

        {/* Experience Box */}
        <div className="mt-14 lg:mt-20 bg-slate-900 rounded-3xl p-8 md:p-10 text-center text-white">

          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Building Real-World Full Stack Solutions
          </h3>

          <p className="max-w-3xl mx-auto text-slate-300 leading-8">
            I build full-stack applications using Next.js, React, Node.js, Express, and MongoDB,
            with hands-on experience in authentication, REST APIs, database design,
            payment integration, and deployment.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

            <div>
              <h4 className="text-3xl font-bold text-yellow-400">
                30+
              </h4>
              <p className="text-slate-400">
                Projects Built
              </p>
            </div>

            <div>
              <h4 className="text-3xl font-bold text-yellow-400">
                1+
              </h4>
              <p className="text-slate-400">
                Years
              </p>
            </div>

            <div>
              <h4 className="text-3xl font-bold text-yellow-400">
                MERN
              </h4>
              <p className="text-slate-400">
                Stack
              </p>
            </div>

            <div>
              <h4 className="text-3xl font-bold text-yellow-400">
                Next.js
              </h4>
              <p className="text-slate-400">
                Projects
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}