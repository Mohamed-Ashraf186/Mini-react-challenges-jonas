import React from "react";

export default function Skill({ skillObj }) {
  return (
    <li className="skill" style={{ backgroundColor: skillObj.color }}>
      {skillObj.skill}
      {skillObj.level === "advanced"
        ? "💪"
        : skillObj.level === "intermediate"
        ? "👍"
        : skillObj.level === "beginner"
        ? "👶"
        : ""}
    </li>
  );
}
