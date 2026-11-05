import Section from "./Section";
import Tags from "./Tags";
import { skills } from "../data";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      {skills.map((s) => (
        <div className="skill-group" key={s.group}>
          <h3>{s.group}</h3>
          <Tags items={s.items} />
        </div>
      ))}
    </Section>
  );
}
