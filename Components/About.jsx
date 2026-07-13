"use client"
export default function About() {
  return (
    <section
      id="about"
      className="p sm:py-20 lg:py-28 bg-white"
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

                    a Full Stack Developer with a strong interest in backend engineering and modern web technologies. I enjoy transforming ideas into real-world applications that are secure, scalable, and easy to use.
            </p>

            <p className="text-slate-600 leading-8 text-base lg:text-lg mt-5">
             Over the past year, I have worked on multiple full-stack projects ranging from business platforms and e-commerce solutions to creator-support applications and productivity tools. These projects have strengthened my understanding of application architecture, authentication workflows, database management, API development, and deployment processes.
            </p>
<p>I enjoy solving complex technical challenges, improving application performance, and creating systems that deliver a smooth experience for users. My goal is to build reliable software that not only works efficiently but also provides long-term value.</p>
            <p className="text-slate-600 leading-8 text-base lg:text-lg mt-5">
              Through projects such as
              <span className="font-semibold text-indigo-600"> E-Commerce Platform</span>,
              <span className="font-semibold text-indigo-600"> GetMeAChai</span>,
              <span className="font-semibold text-indigo-600"> Business Insights</span>,
              <span className="font-semibold text-indigo-600"> News_App</span>,
              and
              <span className="font-semibold text-indigo-600"> Cloud Notes</span>,
              I have gained hands-on experience in full-stack development, secure
              authentication workflows, database-driven applications, payment
              processing systems, and production-ready deployments.
            </p>
          </div>

          {/* Right Content */}
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg border border-slate-100">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
              Highlights
            </h3>
            <ul className="space-y-4 text-slate-700 text-sm sm:text-base lg:text-lg">
              <li>✓ Secure Authentication Systems</li>
              <li>✓ REST API Development</li>
              <li>✓ JWT & NextAuth Authentication</li>
              <li>✓ Google Login Integration</li>
              <li>✓ Password Security with bcrypt</li>
              <li>✓ MongoDB Database Management</li>
              <li>✓ Payment Gateway Integration</li>
              <li>✓ Backend Development with Node.js & Express & Next.js</li>
              <li>✓ Next.js Server Actions & Backend Logic</li>
              <li>✓ Git & GitHub Workflow</li>
              <li>✓ Full Stack Web Development</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}