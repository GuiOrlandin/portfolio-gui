import {
  FaCss3Alt,
  FaDocker,
  FaGithubAlt,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaRegLightbulb,
} from "react-icons/fa";
import { GiThink } from "react-icons/gi";
import { GrAnalytics } from "react-icons/gr";
import { MdOutlineTimer } from "react-icons/md";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiNestjs,
  SiPrisma,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";
import type { SoftSkillIcon, TechnologyItem } from "@/types/technologies";

export const TECHNOLOGIES: TechnologyItem[] = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: RiNextjsFill, color: "#fff" },
  { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Styled Components", icon: SiStyledcomponents, color: "#DB7093" },
  { name: "Tailwind", icon: RiTailwindCssFill, color: "#06B6D4" },
  { name: "GitHub", icon: FaGithubAlt, color: "#fff" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
];

export const SOFT_SKILL_ICONS: SoftSkillIcon[] = [
  MdOutlineTimer,
  GrAnalytics,
  GiThink,
  FaRegLightbulb,
];
