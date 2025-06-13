import SkillCard from "./SkillCard";
import { skills } from "../data/skillsData";

function Skills() {
  return (
    <section className="section">
      <h2 className="sectionTitle" id="skills" tabIndex={-1}>
        Skills
      </h2>
      <div className="skills">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
