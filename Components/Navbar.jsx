"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/95 backdrop-blur-md text-white z-50 border-b border-slate-800 shadow-lg shadow-black/30">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold tracking-wide"
          >
            Samman
            <span className="text-yellow-400">.dev</span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium">
            <li>
              <a href="#home" className="hover:text-yellow-400 transition">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-yellow-400 transition">
                About
              </a>
            </li>

            <li>
              <a href="#skills" className="hover:text-yellow-400 transition">
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" className="hover:text-yellow-400 transition">
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-yellow-400 transition">
                Contact
              </a>
            </li>
          </ul>

          {/* Resume Button */}
          <Link
              href="/projects/Resume_15_07_2026_10_36_04_AM.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition"
          >
            Resume
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden py-5 border-t border-slate-800">
            <ul className="flex flex-col gap-5 text-center font-medium">


              <li>
                <a
                  href="#home"
                  onClick={() => setMenuOpen(false)}
                >
                 Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  onClick={() => setMenuOpen(false)}
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </a>
              </li>

              <li>
                <Link
               href="/projects/Resume_15_07_2026_10_36_04_AM.pdf"
            target="_blank"
            rel="noopener noreferrer"
                  className="bg-yellow-400 px-5 text-black py-2 rounded-lg font-semibold"
                >
               Resume
                </Link>
              </li>

            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}