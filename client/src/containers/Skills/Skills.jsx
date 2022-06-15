import React from "react";
import { motion } from "framer-motion";

import "./Skills.css";

import { images } from "../../constants";

const skills = [
  { name: "Git", bgColor: "white", icon: images.git },
  { name: "React", bgColor: "white", icon: images.react },
  { name: "Javascript", bgColor: "white", icon: images.javascript },
  { name: "Node", bgColor: "white", icon: images.node },
  { name: "Swift", bgColor: "white", icon: images.swift },
];

const experiences = [
  { name: "College Student", company: "Northwest Tech", year: "2020-2022" },
  { name: "Frontline Employee", company: "Arby's", year: "2019-2022" },
];

const Skills = () => {
  return (
    <div id="skills">
      <h2 className="head-text">Skills & Work Experience</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div></div>
              <div className="app__skills-exp-year">
                <p style={{ fontWeight: "bolder", fontSize: "20px" }}>
                  {experience.name}
                </p>
                <div style={{marginTop: "15px"}}>
                  <p
                    style={{
                      fontWeight: "400",
                      fontSize: "16px",
                      color: "black",
                    }}
                  >
                    {experience.company}
                  </p>
                  <p
                    style={{
                      fontWeight: "400",
                      fontSize: "16px",
                      color: "black",
                    }}
                  >
                    {experience.year}
                  </p>
                </div>
              </div>
              <div></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
