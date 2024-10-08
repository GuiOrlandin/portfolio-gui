import Image from "next/image";
import { linkedinData } from "../../request";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithubAlt,
  FaDocker,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

import { MdOutlineTimer } from "react-icons/md";

import { GrAnalytics } from "react-icons/gr";

import { GiThink } from "react-icons/gi";

import { FaRegLightbulb } from "react-icons/fa";

import {
  SiTypescript,
  SiStyledcomponents,
  SiNestjs,
  SiPrisma,
} from "react-icons/si";
import Header from "./components/header";
import Footer from "./components/footer";

export default async function Home() {
  const profileData = await linkedinData();

  const technologies = [
    { name: "Reactjs", icon: <FaReact size={24} color="#61DBFB" /> },
    { name: "Nextjs", icon: <RiNextjsFill size={24} color="#000000" /> },
    { name: "Nodejs", icon: <FaNodeJs size={24} color="#68A063" /> },
    { name: "TypeScript", icon: <SiTypescript size={24} color="#007ACC" /> },
    { name: "HTML", icon: <FaHtml5 size={24} color="#E34C26" /> },
    { name: "CSS", icon: <FaCss3Alt size={24} color="#1572B6" /> },
    { name: "Styled Components", icon: <SiStyledcomponents size={24} /> },
    { name: "Tailwind", icon: <RiTailwindCssFill size={24} color="#007ACC" /> },
    { name: "Github", icon: <FaGithubAlt size={24} color="#181717" /> },
    { name: "Docker", icon: <FaDocker size={24} color="#181717" /> },
    { name: "Nestjs", icon: <SiNestjs size={24} color="#181717" /> },
    { name: "Prisma", icon: <SiPrisma size={24} color="black" /> },
  ];

  const softSkills = [
    {
      name: "Gestão de tempo",
      icon: <MdOutlineTimer size={24} color="#181717" />,
    },
    {
      name: "Capacidade analítica",
      icon: <GrAnalytics size={24} color="#181717" />,
    },
    {
      name: "Atenção aos detalhes",
      icon: <GiThink size={24} color="#181717" />,
    },
    {
      name: "Tomada de decisão",
      icon: <FaRegLightbulb size={24} color="#181717" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen p-8 pt-0 font-[family-name:var(--font-geist-sans)] bg-slate-900 smallPhone:p-2">
      <Header />
      <main className="flex mt-12 justify-center gap-8 1100:flex-col">
        <div className="flex flex-col flex-[2]">
          <div className="flex gap-5">
            <Image
              className="rounded-md"
              alt="profile image"
              src={profileData.profilePicture}
              width={180}
              height={120}
            />
            <div className="flex flex-col mb-4">
              <h1 className="flex text-gray-200 text-4xl font-bold smallPhone:text-2xl">{`${profileData.firstName} ${profileData.lastName}`}</h1>
              <h2 className="text-gray-200 text-base font-bold smallPhone:text-sm">
                {profileData.multiLocaleHeadline.pt}
              </h2>
            </div>
          </div>

          <div>
            <h2 className="text-gray-200  text-xl mt-6 text-base font-bold mt-10">
              Certificações
            </h2>

            <div className="flex flex-col gap-2 mt-2  p-2 rounded-md bg-gray-800">
              {profileData.certifications.map((certfication, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-6 bg-gray-700 rounded-md text-gray-200 hover:bg-gray-600 transition-colors duration-300"
                >
                  {certfication.name}
                  <span className="text-lg font-medium">
                    {certfication.authority}
                  </span>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-gray-200  text-xl mt-6 text-base font-bold mt-10">
                Soft skills
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2 p-4 rounded-md bg-gray-800">
                {softSkills.map((skills, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-2 bg-gray-700 rounded-md text-gray-200 hover:bg-gray-600 transition-colors duration-300"
                  >
                    {skills.icon}
                    <span className="flex font-bold text-[12px]">
                      {skills.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-[3] text-gray-400 mb-2">
          <div className="max-h-[360px] overflow-y-auto scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400">
            {profileData.summary.split("\n").map((line, index) => (
              <p key={index} className="mb-2 text-xl">
                {line.trim()}
              </p>
            ))}
          </div>

          <div className="smallPhone:mb-10">
            <h2 className="text-gray-200  text-xl mt-4 text-base font-bold">
              Tecnologias
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2 mb-2 p-4 rounded-md bg-gray-800 1100:mb-8">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 bg-gray-700 rounded-md text-gray-200 hover:bg-gray-600 transition-colors duration-300"
                >
                  {tech.icon}
                  <span className="text-lg font-bold text-[14px]">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
