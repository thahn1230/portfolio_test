import React, { Fragment } from 'react';
import { Nav } from '../components/Navbar';
import { Intro, About } from '../components/Intro';
import { Skills, Projects } from '../components/Work';
import { Footer, Contact } from '../components/Footer';
import { aboutSkills, aboutEdu, aboutAch, contact, intro, navigation, projects, SEO} from '../config/config';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav
        title={navigation.name}
        links={navigation.links}
      />
      <Intro
        title={intro.title}
        description={intro.description}
        image={intro.image}
        buttons={intro.buttons}
      />
      <About
        title={aboutSkills.title}
        description={aboutSkills.description}
      />
      <About
        title={aboutEdu.title}
        description={aboutEdu.description}
      />
      <About
        title={aboutAch.title}
        description={aboutAch.description}
      />
      <Skills
        title={contact.title}
        cards={contact.cards}
      />
      <Projects
        title={projects.title}
        cards={projects.cards}
      />
      <Footer />
    </Fragment>
  );
}