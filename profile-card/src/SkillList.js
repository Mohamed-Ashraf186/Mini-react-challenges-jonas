import React from "react";
import Skill from "./Skill";
import { skillsData } from "./skillData";

export default function SkillList() {
  return (
    <ul className="skill-list">
      {skillsData.map((skill) => {
        return <Skill skillObj={skill} />;
      })}
    </ul>
  );
}
