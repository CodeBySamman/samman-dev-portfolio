import React from 'react';

const Home = () => {
  return (
    <div>
       <section className="min-h-screen px-4 flex items-center justify-center bg-slate-950 text-white pt-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <span className="inline-block px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-yellow-400 text-xs sm:text-sm font-medium mb-6">
          Backend-Focused Full Stack Developer
        </span>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
          Hi, I'm <span className="text-yellow-400">Samman Shaehzadi</span>
        </h1>

        {/* Sub Heading */}
        <h2 className="mt-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-300">
          Building Secure, Scalable & Modern Web Applications
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto mt-6 text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed">
          I develop modern web applications that combine clean user experiences
          with reliable backend systems. From responsive interfaces to secure
          APIs and database-driven platforms, I focus on building solutions that
          are fast, scalable, and production-ready.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="/project"
            className="w-full sm:w-auto bg-yellow-400 text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300"
          >
            View Projects
          </a>

          <a
            href="/projects/Resume_13_07_2026_03_31_17_PM (1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-slate-600 px-8 py-3 rounded-xl font-semibold hover:bg-slate-800 transition duration-300"
          >
            Download Resume
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6  mt-16 max-w-3xl mx-auto">
          <div className="bg-slate-900 rounded-2xl p-6">
            <h3 className="text-3xl md:text-4xl font-bold text-yellow-400">
              30+
            </h3>
            <p className="text-slate-400 mt-2">Projects Built</p>
          </div>
          <div className="bg-slate-900 rounded-2xl p-6">
            <h3 className="text-3xl md:text-4xl font-bold text-yellow-400">
              MERN
            </h3>
            <p className="text-slate-400 mt-2">Stack Specialist</p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6">
            <h3 className="text-3xl md:text-4xl font-bold text-yellow-400">
              Next.js
            </h3>
            <p className="text-slate-400 mt-2">Applications</p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6">
            <h3 className="text-3xl md:text-4xl font-bold text-yellow-400">
              1+
            </h3>
            <p className="text-slate-400 mt-2">Year Experience</p>
          </div>

        
        </div>
      </div>
    </section>
  );
    </div>
  );
}

export default Home;
