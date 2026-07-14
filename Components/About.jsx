"use client"
export default function About() {
  return (
    <section
      id="about"
      className="py-10 sm:py-20 lg:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            About Me
          </h2>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto">
            Passionate Full Stack Developer focused on building
            scalable, responsive, and user-friendly web applications.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

          {/* Left Content */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-5">
              Who I Am
            </h3>
            <p className="text-slate-600 leading-8 text-base lg:text-lg">
              I'm{" "}
              <span className="font-semibold text-indigo-600">
                Samman Shaehzadi {""}
              </span>

                    a Full Stack Developer specializing in Next.js, React, Node.js, Express.js, and MongoDB. I enjoy building secure, scalable, and user-friendly web applications with a strong focus on backend development.
            </p>

            <p className="text-slate-600 leading-8 text-base lg:text-lg mt-5">
            Over the past year, I have developed e-commerce platforms, creator-support applications, business dashboards, and productivity tools. Through these projects, I have gained practical experience in authentication, REST APIs, database design, payment integration, deployment, and modern web development.
            </p>
            <p className="text-slate-600 leading-8 text-base lg:text-lg mt-5">
            My notable projects include Ovilo Store, GetMeAChai, Business Insights, and Cloud Notes, where I implemented secure authentication, REST APIs, database management, payment integration, and production-ready deployment.
            </p>
          </div>

          {/* Right Content */}
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg border border-slate-100">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
              Highlights
            </h3>
            <ul className="space-y-4 text-slate-700 text-sm sm:text-base lg:text-lg">
              <li>✓ Full Stack Web Development</li>
              <li>✓ Next.js & React</li>
              <li>✓ Node.js & Express</li>
              <li>✓ MongoDB</li>
              <li>✓ REST APIs</li>
              <li>✓ JWT & NextAuth</li>
              <li>✓ Google OAuth</li>
              <li>✓ Payment Integration</li>
              
              
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}