import projects from "@/data/projects";

export default async function ProjectDetails({ params }) {

  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );


  if (!project) {
    return (
      <h1 className="text-center mt-20 text-3xl font-bold">
        Not Found
      </h1>
    );
  }


  return (
    <section className="min-h-screen bg-slate-950 text-white pt-24 pb-20 px-5 sm:px-8">

      <div className="max-w-5xl mx-auto">


        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400">
          {project.title}
        </h1>


        {/* Description */}
        <p className="mt-6 text-slate-300 text-base sm:text-lg leading-7 sm:leading-8">
          {project.description}
        </p>



        {/* Technologies */}
        <div className="mt-10">

          <h2 className="text-xl sm:text-2xl font-bold">
            Technologies
          </h2>


          <div className="flex flex-wrap gap-3 mt-5">

            {project.stack.map((tech)=>(
              <span
                key={tech}
                className="
                bg-yellow-400
                text-black
                px-3 sm:px-4
                py-2
                rounded-full
                text-sm sm:text-base
                font-medium
                "
              >
                {tech}
              </span>
            ))}

          </div>

        </div>




        {/* Features */}
        <div className="mt-10">

          <h2 className="text-xl sm:text-2xl font-bold">
            Features
          </h2>


          <ul className="
          mt-5
          space-y-3
          text-slate-300
          text-sm
          sm:text-base
          ">

            {project.features.map((feature)=>(
              <li 
              key={feature}
              className="flex items-center gap-2"
              >
                <span className="text-yellow-400">
                  ✓
                </span>
                {feature}
              </li>
            ))}

          </ul>

        </div>




        {/* Button */}
        <div className="mt-10">

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-block
            w-full
            sm:w-auto
            text-center
            bg-yellow-400
            text-black
            px-6
            py-3
            rounded-lg
            font-semibold
            hover:scale-105
            transition
            "
          >
            Live Demo
          </a>

        </div>


      </div>

    </section>
  );
}