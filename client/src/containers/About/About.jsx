import React from 'react';
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./About.css";

const abouts = [
  {
    title: "Frontend Web Development",
    description: "I am a frontend developer with a passion for building beautiful and functional websites.",
    imgUrl: images.graphql,
  },
  {
    title: "MERN Stack",
    description: "I have knowledge and experience working with the MERN Stack, as well as mySQL.",
    imgUrl: images.typescript,
  },
  {
    title: "App Development",
    description: "I build mobile apps using React Native and Swift.",
    imgUrl: images.redux,
  },
];

const About = () => {
  return (
    <div id="about">
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