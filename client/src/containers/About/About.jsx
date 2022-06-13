import React from 'react';
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./About.css";

const abouts = [
  {
    title: "Web Development",
    description: "I am a good web developer",
    imgUrl: images.figma,
  },
  {
    title: "Frontend Development",
    description: "I am a good web developer",
    imgUrl: images.graphql,
  },
  {
    title: "MERN Stack",
    description: "I am a good web developer",
    imgUrl: images.typescript,
  },
  {
    title: "App Development",
    description: "I am a good web developer",
    imgUrl: images.redux,
  },
];

const About = () => {
  return (
    <div>
      <h2 className="head-text">
        I Build Websites to Help <span>People</span> <br /> and{" "}
        <span>Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => {
          return (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={about.imgUrl} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  )
}

export default About