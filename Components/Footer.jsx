"use client"
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold">
              Samman
              <span className="text-yellow-400">.dev</span>
            </h2>

            <p className="mt-4 text-slate-400 leading-7 text-sm">
    Full Stack Developer focused on building secure, scalable, and user-friendly web applications with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-yellow-400 transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="hover:text-yellow-400 transition"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="hover:text-yellow-400 transition"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-yellow-400 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <div>
            <h3 className="text-xl font-semibold mb-2">
              Connect With Me
            </h3>
              <p className="text-slate-400 text-sm">
  Open to internships, freelance opportunities,
  collaborations, and full-time development roles.
</p></div>
            <div className="flex gap-4 mt-3">
              <a
                href="https://github.com/CodeBySamman"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-700 hover:border-yellow-400 hover:text-yellow-400 transition"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-700 hover:border-yellow-400 hover:text-yellow-400 transition"
              >
                <FaLinkedin size={20} />
              </a>
            </div>

            <p className="text-slate-400 mt-5">
              Available for internships,
              freelance projects and full-time roles.
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Samman Shaehzadi. All Rights Reserved.
          </p>

          {/* Back To Top */}
          <Link
           href="/"
            className="
              flex items-center gap-2
              bg-yellow-400
              text-black
              px-4 py-2
              rounded-lg
              font-semibold
              hover:scale-105
              transition
            "
          >
            <FaArrowUp />
          
   Back Home
          </Link>

        </div>

      </div>
    </footer>
  );
}