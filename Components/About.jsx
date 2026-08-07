"use client"
export default function About() {
  return (
    <section
      id="about"
      className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
            About Me
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-2">
            Full Stack Developer crafting scalable, secure, and
            user-centric web applications from concept to deployment.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-14 items-center">

          {/* Left Content */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 sm:mb-5">
              Who I Am
            </h3>
            <p className="text-slate-600 leading-7 sm:leading-8 text-sm sm:text-base md:text-lg">
              I'm{" "}
              <span className="font-semibold text-indigo-600">
                Samman Shaehzadi
              </span>
              , a Full Stack Developer specializing in Next.js, React, Node.js, Express.js, and MongoDB. I build secure, scalable web applications with a strong emphasis on clean backend architecture and real-world business logic.
            </p>

            <p className="text-slate-600 leading-7 sm:leading-8 text-sm sm:text-base md:text-lg mt-4 sm:mt-5">
              Over the past year, I've independently designed and built full-stack platforms — from e-commerce systems with admin dashboards to creator-support applications and content management tools — handling everything from database schema design to production deployment.
            </p>
            <p className="text-slate-600 leading-7 sm:leading-8 text-sm sm:text-base md:text-lg mt-4 sm:mt-5">
              My notable projects include{" "}
              <span className="font-semibold text-slate-800">Ovilo Store</span>,{" "}
              <span className="font-semibold text-slate-800">GetMeAChai</span>,{" "}
              <span className="font-semibold text-slate-800">Business Insights</span>, and{" "}
              <span className="font-semibold text-slate-800">Cloud Notes</span> — each demonstrating secure authentication, RESTful API design, database modeling, and full production deployment.
            </p>
          </div>

          {/* Right Content */}
          <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-lg border border-slate-100">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
              Highlights
            </h3>
            <ul className="space-y-3 sm:space-y-4 text-slate-700 text-sm sm:text-base md:text-lg">
              <li>✓ Full Stack Web Development</li>
              <li>✓ Next.js & React</li>
              <li>✓ Node.js & Express</li>
              <li>✓ MongoDB & Mongoose</li>
              <li>✓ RESTful API Design</li>
              <li>✓ JWT & NextAuth Authentication</li>
              <li>✓ Google OAuth Integration</li>
              <li>✓ Admin Dashboards & Analytics</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}