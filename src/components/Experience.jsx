import Section from "./Section";
import Tags from "./Tags";
import { experience } from "../data";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      {experience.map((job) => (
        <article className="item" key={job.title + job.org}>
          <div className="when">{job.when}</div>
          <div>
            <h3>{job.title}, {job.org}</h3>
            <ul className="points">
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <Tags items={job.tags} />
          </div>
        </article>
      ))}
    </Section>
  );
}
