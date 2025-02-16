// components/MarqueeBanner.js
import Marquee from "react-fast-marquee";
import { BiLogoVisualStudio, BiLogoJava } from "react-icons/bi";
import {
  SiJavascript,
  SiNodedotjs,
  SiDotnet,
  SiCss3,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiHtml5,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiGitlab,
  SiDocker,
  SiEslint,
  SiVite,
} from "react-icons/si";

// Original full text
const marqueeText =
  "Programming Languages: Java, JavaScript, Node.js, .NET, CSS ● Frontend Technologies: React, Vue.js, Next.js, HTML, CSS ● Backend Technologies: Node.js, Express.js, .NET ● Databases: MySQL, MongoDB ● Version Control: Git, GitHub, GitLab ● Other Frameworks & Tools: Visual Studio Code, Docker, ESLint, Vite";

// Mapping technology names to their corresponding React Icon components
const iconMapping = {
  Java: BiLogoJava,
  JavaScript: SiJavascript,
  "Node.js": SiNodedotjs,
  ".NET": SiDotnet,
  CSS: SiCss3,
  React: SiReact,
  "Vue.js": SiVuedotjs,
  "Next.js": SiNextdotjs,
  HTML: SiHtml5,
  "Express.js": SiExpress,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Git: SiGit,
  GitHub: SiGithub,
  GitLab: SiGitlab,
  "Visual Studio Code": BiLogoVisualStudio,
  Docker: SiDocker,
  ESLint: SiEslint,
  Vite: SiVite,
};

export default function MarqueeBanner() {
  // Split the full text into categories based on the bullet separator.
  const categories = marqueeText.split(" ● ");

  return (
    <div
      className="relative mx-auto w-[75vw] h-16 overflow-hidden bg-transparent flex items-center"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <Marquee gradient={false} speed={40} className="text-white">
        {categories.map((cat, i) => {
          // Split category into label and items
          const [categoryLabel, itemsString = ""] = cat.split(":");
          const items = itemsString
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean);
          return (
            <div key={i} className="flex items-center mr-8 whitespace-nowrap">
              <span className="font-bold mr-2">{categoryLabel}:</span>
              {items.map((item, idx) => {
                const IconComponent = iconMapping[item];
                return (
                  <div key={idx} className="flex items-center mr-3">
                    {IconComponent ? (
                      <IconComponent className="mr-1" size={18} />
                    ) : null}
                    <span>{item}</span>
                  </div>
                );
              })}
            </div>
          );
        })}
        {/* Spacer to create a larger gap between repetitions */}
        <span style={{ display: "inline-block", width: "200px" }} />
      </Marquee>
    </div>
  );
}
