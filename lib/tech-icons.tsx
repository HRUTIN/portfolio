import {
  Bot,
  Braces,
  CloudCog,
  Globe,
  type LucideIcon,
  MonitorCog,
  Server,
} from "lucide-react";
import {
  siDocker,
  siFastapi,
  siFigma,
  siFlask,
  siGit,
  siHtml5,
  siJavascript,
  siMongodb,
  siMysql,
  siOpencv,
  siOpenjdk,
  siPython,
  siSupabase,
  siTailwindcss,
  siTensorflow,
} from "simple-icons";

export type TechIconName =
  | "python"
  | "java"
  | "fastapi"
  | "flask"
  | "rest"
  | "tailwindcss"
  | "javascript"
  | "html"
  | "mysql"
  | "mongodb"
  | "supabase"
  | "azure"
  | "aws"
  | "docker"
  | "opencv"
  | "tensorflow"
  | "nlp"
  | "llm"
  | "git"
  | "vscode"
  | "figma";

type SkillIconProps = {
  name: TechIconName;
  className?: string;
};

type SimpleIconData = {
  path: string;
  hex: string;
};

const simpleIcons: Partial<Record<TechIconName, SimpleIconData>> = {
  python: siPython,
  java: siOpenjdk,
  fastapi: siFastapi,
  flask: siFlask,
  tailwindcss: siTailwindcss,
  javascript: siJavascript,
  html: siHtml5,
  mysql: siMysql,
  mongodb: siMongodb,
  supabase: siSupabase,
  docker: siDocker,
  opencv: siOpencv,
  tensorflow: siTensorflow,
  git: siGit,
  figma: siFigma,
};

const fallbackIcons: Partial<Record<TechIconName, LucideIcon>> = {
  rest: Server,
  azure: CloudCog,
  aws: CloudCog,
  nlp: Braces,
  llm: Bot,
  vscode: MonitorCog,
};

const fallbackColors: Partial<Record<TechIconName, string>> = {
  rest: "#7dd3fc",
  azure: "#60a5fa",
  aws: "#f59e0b",
  nlp: "#c084fc",
  llm: "#7af5c3",
  vscode: "#3b82f6",
};

export function SkillLogo({ name, className = "h-4 w-4" }: SkillIconProps) {
  const simpleIcon = simpleIcons[name];

  if (simpleIcon) {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={className}
        style={{ color: `#${simpleIcon.hex}` }}
        fill="currentColor"
      >
        <path d={simpleIcon.path} />
      </svg>
    );
  }

  const Fallback = fallbackIcons[name] ?? Globe;

  return <Fallback className={className} style={{ color: fallbackColors[name] ?? "#cbd5e1" }} aria-hidden="true" />;
}
