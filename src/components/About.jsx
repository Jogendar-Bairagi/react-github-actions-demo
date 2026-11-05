import Section from "./Section";
import { about } from "../data";

export default function About() {
  return (
    <Section id="about" title="About">
      {about.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </Section>
  );
}
