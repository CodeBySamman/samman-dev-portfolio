import About from '@/Components/About';
import Contact from '@/Components/Contact';
import Home from '@/Components/Home';
import Projects from '@/Components/Projects';
import Skills from '@/Components/Skills';
import React from 'react';

const page = () => {
  return (
    


 
    <>
      <section id="home">
        <Home/>
      </section>

       <section id="about">
        <About/>
      </section>

      <section id="skills">
        <Skills/>
      </section>

      <section id="projects">
        <Projects/>
      </section>

      <section id="contact">
        <Contact/>
      </section> 
    </>
 
  );
}

export default page;

