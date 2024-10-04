import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" bg-black fixed flex gap-6 m-0 w-full bottom-0 left-0 right-0 items-center justify-center p-4">
      <a href="https://github.com/GuiOrlandin">
        <FaGithub size={24} color="white" />
      </a>
      <a href="https://www.linkedin.com/in/guilherme-orlandin">
        <FaLinkedin size={24} color="white" />
      </a>
    </footer>
  );
}
