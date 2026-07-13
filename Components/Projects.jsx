"use client"
const projects = [

{
  title: "Ovilo Store",
  image: "/projects/ovi.png",
  description:
    "A full-stack e-commerce platform built with Next.js and MongoDB featuring secure authentication, role-based admin access, comprehensive admin dashboard, cart, product and category management, order processing, customer management, homepage content control, server-side operations, and scalable database architecture.",
  stack: ["Next.js", "MongoDB", "NextAuth","Google Login"],
  features: [
    "Admin Dashboard",
    "Product Management",
    "Order Management",
    "Category Control",
    "Cart Management"
  ],
  github: "https://github.com/CodeBySamman",
  live: "https://ovilo-ecommerce-platform.vercel.app",
},
 {
    title: "GetMeAChai",
    image: "/projects/chiweeb.png",
    description:
      "A full-stack creator support platform developed with Next.js and MongoDB, featuring Google authentication with NextAuth, secure user management, server-side data handling, dynamic payment support workflow, and optimized backend operations.",
    stack: ["Next.js", "MongoDB", "Tailwind CSS"],
    features: ["NextAuth", "Google Login", "Server Actions", "Payment Getway"],
    github: "https://github.com/CodeBySamman",
    live: "https://getmeachai-nextjs.vercel.app",
  },
 {
    title: "Business Insights",
    image: "/projects/blogs.png",
    description:
      "A full-stack business analytics platform built with MERN Stack featuring JWT authentication, role-based protected routes, secure password hashing with bcrypt, input validation, RESTful APIs, MongoDB data management, and scalable backend architecture for business data processing.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    features: ["JWT", "bcrypt", "Validation", "REST APIs"],
    github: "https://github.com/CodeBySamman",
    live: "https://bloginsights-fullstack-fdj4.vercel.app",
  },

  {
    title: "Cloud Notes",
    image: "/projects/nots.png",
    description:
      "A secure MERN-based note management application with JWT authentication, password encryption using bcrypt, protected API routes, complete CRUD operations, MongoDB integration, middleware-based authorization, and efficient user-specific data handling.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    features: ["JWT", "bcrypt", "Authentication", "CRUD"],
    github: "https://github.com/CodeBySamman",
    live: "https://cloudnotes-fullstack-mern-i3t2cp3q1-codebysammans-projects.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
  id="projects"
  className="py-16 md:py-24 lg:py-28 bg-white"
>
  <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

    {/* Heading */}
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
        Featured Projects
      </h2>

      <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
        Some of the projects I have built using MERN Stack,
        Next.js, MongoDB, REST APIs, and modern web technologies.
      </p>
    </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {projects.map((project) => (
        <div
          key={project.title}
          className="
            bg-white
            border border-slate-200
            rounded-3xl
            overflow-hidden
            shadow-sm
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all
            duration-300
          "
        >

          {/* Project Image */}
         <div className="h-62 sm:h-72 bg-slate-200 overflow-hidden">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover"
  />
</div>

          {/* Content */}
          <div className="p-6">

            <h3 className="text-2xl font-bold text-slate-900">
              {project.title}
            </h3>

            <p className="text-slate-600 mt-3 leading-7">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="
                    px-3 py-1
                    bg-indigo-50
                    text-indigo-600
                    rounded-full
                    text-sm
                    font-medium
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.features.map((feature) => (
                <span
                  key={feature}
                  className="
                    px-3 py-1
                    bg-slate-100
                    text-slate-700
                    rounded-full
                    text-sm
                  "
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-yellow-400
                  text-black
                  px-5 py-3
                  rounded-lg
                  font-semibold
                  text-center
                  hover:scale-105
                  transition
                "
              >
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  border border-slate-300
                  px-5 py-3
                  rounded-lg
                  font-semibold
                  text-center
                  hover:bg-slate-100
                  transition
                "
              >
                GitHub
              </a>

            </div>

          </div>
        </div>
      ))}

    </div>
  </div>
</section>
  );
}