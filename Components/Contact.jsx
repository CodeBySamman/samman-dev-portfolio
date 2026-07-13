"use client"
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Contact Me
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Open for internships, freelance projects,
            and full-time opportunities. Feel free to
            reach out if you'd like to work together.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-yellow-400 transition">
            <FaEnvelope className="text-3xl text-yellow-400 mx-auto mb-4" />
            <h3 className="font-semibold text-lg">
              Email
            </h3>

            <p className="text-slate-400 mt-2 break-all">
              shezadii783@gmail.com
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-yellow-400 transition">
            <FaGithub className="text-3xl text-yellow-400 mx-auto mb-4" />
            <h3 className="font-semibold text-lg">
              GitHub
            </h3>

            <p className="text-slate-400 mt-2">
              https://github.com/CodeBySamman
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-yellow-400 transition">
            <FaLinkedin className="text-3xl text-yellow-400 mx-auto mb-4" />
            <h3 className="font-semibold text-lg">
              LinkedIn
            </h3>

            <p className="text-slate-400 mt-2">
             ...
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="mailto:saman@example.com"
            className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Let's Connect
          </a>
        </div>

      </div>
    </section>
  );
}