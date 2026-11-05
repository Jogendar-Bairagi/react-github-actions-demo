import Section from "./Section";
import { profile } from "../data";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p>I’m open to frontend and full stack roles. The quickest way to reach me is email.</p>
      <a className="btn" href={`mailto:${profile.email}`}>{profile.email}</a>
      <p className="foot">Built with React and hosted on AWS S3.</p>
    </Section>
  );
}
