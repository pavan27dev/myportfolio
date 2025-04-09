import "./portfolio.css";

import IMG1 from "../../assets/insurance.jpg";
import IMG2 from "../../assets/school.jpg";
import IMG3 from "../../assets/food.jpg";
import IMG4 from "../../assets/invoice.jpg";
import IMG5 from "../../assets/Jokes Project.jpg";
import IMG6 from "../../assets/Project4.jpg";
import IMG7 from "../../assets/geno.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Insurance Agent website",
      img: IMG1,
      // description:
      //   "An educational website is a huge interactive platform to present various information for people.",
      // technologies: "Html | CSS | Javascript | React Js",
      // link: "https://pavan27dev.github.io/insurance_Agent/",
      github: "https://pavan27dev.github.io/insurance_Agent/",
    },
    {
      id: 2,
      title: "Invoice Bill Generate",
      img: IMG4,
      // description:
      //   "A personal website assembled for a lawyer. Firebase is the basis of the website assembled as a full stack",
      // technologies: "HTML | CSS | JavaScript | Express Js | Firebase",
      // link: "https://pavan27dev.github.io/invoice.pdf/",
      github: "https://pavan27dev.github.io/invoice.pdf/",
    },
    {
      id: 3,
      title: "School Management Landing website",
      img: IMG2,
      // description: "A booking website for doctor's appointments at the hospital. The website is mainly functionally developed with JavaScript",
      // technologies: "HTML | CSS | JavaScript",
      // link: "https://7softsai.github.io/pavan-10-03-2024/",
      github: "https://7softsai.github.io/pavan-10-03-2024/",
    },
    {
      id: 4,
      title: "Startup Landing Page",
      img: IMG3,
      description:
        "Food Delivery E-Commerce Website",
      // technologies: "Html | CSS | JavaScript | Next Js",
      // link: "https://alpha-agency-project.vercel.app/",
      // github: "https://github.com/Rasif-Taghizada/Alpha-Agency-Project",
    },
    {
      id: 5,
      title: "Genocare Scientific Web Site",
      img: IMG7,
      description:
        "Freelancing",
      // technologies: "Html | CSS | JavaScript | Next Js",
      link: "https://genocarescientific.com/",
      github: "https://genocarescientific.com/",
    },
    // {
    //   id: 5,
    //   title: "Jokes Project with Typescript",
    //   img: IMG5,
    //   description:
    //     "For when you need a fast funny joke, here are some short jokes to get anyone giggling.",
    //   technologies: "Html | Styled-components | Typescript",
    //   link: "https://jokes-project.vercel.app/",
    //   github: "https://github.com/Rasif-Taghizada/Joke-App",
    // },
    // {
    //   id: 6,
    //   title: "Fs Poster Website",
    //   img: IMG6,
    //   description:
    //     "Real-world group project which is still in progress and will provide educational platform for future young developers",
    //   technologies: "Html | Scss | Javascript",
    //   link: "https://fs-poster-project.vercel.app/",
    //   github: "https://github.com/Rasif-Taghizada/Fs-Poster-Project",
    // },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
