import type { SoftSkillIcon, TechnologyItem } from "@/types/technologies";
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
  SiJest,
  SiMongodb,
  SiMui,
  SiNestjs,
  SiPostgresql,
  SiPrisma,
  SiReactquery,
  SiRedis,
  SiStorybook,
  SiStyledcomponents,
  SiTypescript,
  SiZod,
} from "react-icons/si";

export const TECHNOLOGIES: TechnologyItem[] = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: RiNextjsFill, color: "#fff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "React Query", icon: SiReactquery, color: "#FF4154" },
  { name: "MUI", icon: SiMui, color: "#007FFF" },
  { name: "Storybook", icon: SiStorybook, color: "#FF4785" },
  { name: "Zod", icon: SiZod, color: "#3E67B1" },
  { name: "Tailwind", icon: RiTailwindCssFill, color: "#06B6D4" },
  { name: "Styled Components", icon: SiStyledcomponents, color: "#DB7093" },
  { name: "Jest", icon: SiJest, color: "#C21325" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "GitHub", icon: FaGithubAlt, color: "#fff" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
];

export const SOFT_SKILL_ICONS: SoftSkillIcon[] = [
  MdOutlineTimer,
  GrAnalytics,
  GiThink,
  FaRegLightbulb,
];

export const PRIMARY_STACK_NAMES = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "NestJS",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "Storybook",
  "Docker",
] as const;
