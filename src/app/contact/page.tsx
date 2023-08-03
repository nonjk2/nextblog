import ContactForm from "@/components/ContactForm";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

const LINKS = [
  { icon: <AiFillGithub />, url: "https://github.com/nonjk2" },
  { icon: <AiFillLinkedin />, url: "https://github.com/nonjk3" },
  { icon: <AiFillYoutube />, url: "https://github.com/nonjk4" },
];

const ContactPage = () => {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <p>info@eunseok</p>
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, i) => (
          <a
            href={link.url}
            key={link.url}
            target="_blank"
            rel="noreferrer"
            className="text-5xl"
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className="text-3xl font-bold my-8">Or Send me an email</h2>
      <ContactForm />
    </section>
  );
};
export default ContactPage;
