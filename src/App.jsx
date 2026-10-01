import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronRight,
  Copy,
  ExternalLink,
  FileText,
  Home,
  Mail,
  Moon,
  Sun,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

const EMAIL = "vivekjain.patna@gmail.com";

const profile = {
  github: "https://github.com/thevivekjain",
  linkedin: "https://www.linkedin.com/in/vivek-kumar-jain-31b189302",
  x: "https://x.com/thevivekjainn",
  leetcode: "https://leetcode.com/u/thevivekjain/",
  gfg: "https://www.geeksforgeeks.org/profile/vivekjai70oj?tab=activity",
  resume: "/assets/resume.pdf",
};

const achievements = [
  {
    title: "LeetCode",
    subtitle: "Java ",
    detail: "160+ Questions Solved",
    icon: SiLeetcode,
    href: profile.leetcode,
  },
  {
    title: "GeeksforGeeks",
    subtitle: "Java ",
    detail: "80+ Questions Solved",
    icon: SiGeeksforgeeks,
    href: profile.gfg,
  },
];

const skills = [
  "Java",
  "DSA",
  "Node.js",
  "React.js",
  "JavaScript",
  "Python",
  "REST APIs",
  "Git",
  "MERN",
  "Genrative AI",
];

const projects = [
  {
    title: "Home Ease",
    date: "2026 – Present",
    description:
      "A full-stack home services marketplace connecting users with local service providers, featuring bookings, ratings, role-based dashboards, and platform management.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    image: "/assets/proj1.mp4",
    live: "https://home-ease-frontend.vercel.app",
    source: "https://github.com/thevivekjain/Home-Ease-Frontend",
  },
  {
    title: "Nyay Ghar",
    date: "2026 – Present",
    description:
      "A comprehensive lawyer management system connecting lawyers and clients with case lifecycle management, document automation and AI-assisted legal research. Built with secure role-based access.",
    tags: ["MERN", "Generative AI"],
    image: "/assets/proj2.mp4",
    live: "https://nyay-frontend.onrender.com",
    source: "https://github.com/thevivekjain/nyay-frontend",
  },
  {
    title: "College Tracker",
    date: "2026 – Present",
    description:
      "A digital campus administration platform that automates internal document approvals. It provides real-time application tracking, digital signatures, automated notifications and a centralized dashboard.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    image: "/assets/proj3.mp4",
    live: "https://college-tracker-vivek.vercel.app",
    source: "https://github.com/thevivekjain/collage-tracker-frontend",
  },
  {
    title: "Jain Food Delivery",
    date: "2026 – Present",
    description:
      "A polished food ordering interface focused on responsive UI, smooth menu filtering, dynamic cart management and a premium dining-at-home experience using React state management.",
    tags: ["React.js", "CSS3", "UI/UX"],
    image: "/assets/proj4.mp4",
    live: "https://jain-food-delivery-frontend.vercel.app",
    source: "https://github.com/thevivekjain/jain-food-delivery-frontend",
  },
];
const dockItems = [
  { label: "Home", href: "#top", icon: Home },

  {
    label: "GitHub",
    href: profile.github,
    icon: FaGithub,
    external: true,
  },

  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: FaLinkedin,
    external: true,
  },

  {
    label: "LeetCode",
    href: profile.leetcode,
    icon: SiLeetcode,
    external: true,
  },

  {
    label: "GFG",
    href: profile.gfg,
    icon: SiGeeksforgeeks,
    external: true,
  },

  {
    label: "Resume",
    href: profile.resume,
    icon: FileText,
    external: true,
  },
];

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-[6px] bg-[#f4f4f4] px-3 py-[5px] text-[12px] font-semibold leading-none text-[#151515] transition-transform duration-200 hover:-translate-y-0.5">
      {children}
    </span>
  );
}

function ProjectAction({ href, type }) {
  const isSource = type === "Source";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-[32px] items-center gap-[6px] rounded-[6px] border border-[#303030] bg-[#f5f5f5] px-[10px] text-[12px] font-semibold text-[#171717] transition-all duration-200 hover:-translate-y-[1px] hover:bg-white hover:shadow-[0_5px_16px_rgba(255,255,255,.08)]"
    >
      {isSource ? <FaGithub size={14} /> : <ExternalLink size={13} />}
      {type}
    </a>
  );
}

function AchievementRow({ item, dark }) {
  const Icon = item.icon;

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-3 rounded-[10px] py-1 transition-transform duration-200 hover:translate-x-[2px] sm:gap-4"
    >
      <div
        className={`grid h-[44px] w-[44px] shrink-0 place-items-center overflow-hidden rounded-full border sm:h-[48px] sm:w-[48px] ${
          dark
            ? "border-[#252525] bg-[#111] text-white"
            : "border-[#e0e0e0] bg-[#f5f5f5] text-[#171717]"
        }`}
      >
        <Icon size={21} />
      </div>

      <div className="min-w-0 flex-1">
        <div
          className={`flex items-center gap-1 text-[15px] font-semibold leading-tight sm:text-[17px] ${
            dark ? "text-[#f2f2f2]" : "text-[#171717]"
          }`}
        >
          {item.title}

          <ChevronRight
            size={15}
            className={`transition-transform group-hover:translate-x-1 ${
              dark ? "text-[#858585]" : "text-[#999]"
            }`}
          />
        </div>

        <p
          className={`mt-[3px] text-[13px] sm:text-[15px] ${
            dark ? "text-[#dedede]" : "text-[#666]"
          }`}
        >
          {item.subtitle}
        </p>
      </div>

      <div
        className={`hidden text-right text-[14px] sm:block ${
          dark ? "text-[#858585]" : "text-[#777]"
        }`}
      >
        {item.detail}
      </div>
    </a>
  );
}

function Dock({ dark, setDark }) {
  const [hovered, setHovered] = useState(null);

  const items = [
    ...dockItems,
    {
      label: dark ? "Light" : "Dark",
      icon: dark ? Moon : Sun,
      button: true,
    },
  ];

  return (
    <motion.nav
      aria-label="Portfolio navigation"
      onMouseEnter={() => {}}
      className="fixed bottom-3 left-1/2 z-[120] -translate-x-1/2 sm:bottom-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.5 }}
    >
      <motion.div
        className={`flex h-[58px] items-center rounded-[30px] border px-[6px] shadow-[0_18px_50px_rgba(0,0,0,.22)] backdrop-blur-xl ${
          dark
            ? "border-[#252525] bg-[#101010]/98"
            : "border-[#d8d8d8] bg-white/95"
        }`}
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          const isHovered = hovered === index;

          const itemWidth = isHovered ? 68 : 44;

          return (
            <motion.div
              key={item.label}
              layout
              animate={{
                width: itemWidth,
              }}
              transition={{
                type: "spring",
                stiffness: 430,
                damping: 28,
                mass: 0.55,
              }}
              className="relative flex h-[46px] shrink-0 items-center justify-center"
            >
              {index > 0 && (
                <motion.span
                  className={`absolute left-0 top-1/2 w-px -translate-x-1/2 -translate-y-1/2 ${
                    dark ? "bg-[#303030]" : "bg-[#d5d5d5]"
                  }`}
                  animate={{
                    height: isHovered ? 34 : 30,
                    opacity: isHovered ? 0.9 : 0.65,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 28,
                  }}
                />
              )}

              {item.button ? (
                <motion.button
                  type="button"
                  aria-label="Toggle theme"
                  onClick={() => setDark((value) => !value)}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  className={`group relative grid h-[44px] w-[44px] place-items-center rounded-full ${
                    dark ? "text-[#e2e2e2]" : "text-[#555]"
                  }`}
                  animate={{
                    scale: isHovered ? 1.12 : 1,
                    y: isHovered ? -1 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 20,
                    mass: 0.45,
                  }}
                >
                  <motion.span
                    className={`absolute inset-0 rounded-full ${
                      dark ? "bg-[#252525]" : "bg-[#eeeeee]"
                    }`}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      scale: isHovered ? 1 : 0.72,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 25,
                      mass: 0.4,
                    }}
                  />

                  <Icon size={19} className="relative z-10" />

                  <span
                    className={`pointer-events-none absolute bottom-[calc(100%+9px)] left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-[6px] px-2 py-[5px] text-[11px] font-semibold opacity-0 shadow-[0_6px_20px_rgba(0,0,0,.2)] transition-opacity duration-150 group-hover:opacity-100 ${
                      dark
                        ? "bg-[#d8d8d8] text-[#151515]"
                        : "bg-[#222] text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                </motion.button>
              ) : (
                <motion.a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  className={`group relative grid h-[44px] w-[44px] place-items-center rounded-full ${
                    dark ? "text-[#e2e2e2]" : "text-[#555]"
                  }`}
                  aria-label={item.label}
                  animate={{
                    scale: isHovered ? 1.12 : 1,
                    y: isHovered ? -1 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 20,
                    mass: 0.45,
                  }}
                >
                  <motion.span
                    className={`absolute inset-0 rounded-full ${
                      dark ? "bg-[#252525]" : "bg-[#eeeeee]"
                    }`}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      scale: isHovered ? 1 : 0.72,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 25,
                      mass: 0.4,
                    }}
                  />

                  <Icon size={19} className="relative z-10" />

                  <span
                    className={`pointer-events-none absolute bottom-[calc(100%+9px)] left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-[6px] px-2 py-[5px] text-[11px] font-semibold opacity-0 shadow-[0_6px_20px_rgba(0,0,0,.2)] transition-opacity duration-150 group-hover:opacity-100 ${
                      dark
                        ? "bg-[#d8d8d8] text-[#151515]"
                        : "bg-[#222] text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                </motion.a>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </motion.nav>
  );
}

function App() {
  const [dark, setDark] = useState(true);
  const [copied, setCopied] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <main
      id="top"
      className={`min-h-screen transition-colors duration-300 ${
        dark ? "bg-[#050505] text-[#f4f4f4]" : "bg-white text-[#171717]"
      }`}
    >
      <div className="mx-auto w-full max-w-[640px] px-4 pb-32 pt-10 sm:px-0 sm:pt-22">
        {/* GitHub contribution image */}
        {/* GitHub contribution image */}
<motion.div
  initial={{ opacity: 0, y: -12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.55 }}
  className="portfolio-scroll mb-5 w-full overflow-x-auto overflow-y-hidden rounded-[9px] sm:mb-5"
>
  <a
    href={profile.leetcode}
    target="_blank"
    rel="noreferrer"
    className="block w-max"
  >
    <img
  src="/assets/top1.png"
  alt="GitHub contribution activity"
  className={`block h-[120px] w-auto min-w-[640px] object-contain sm:h-[120px] sm:min-w-[640px] ${
    dark ? "" : "invert"
  }`}
/>
  </a>
</motion.div>

        {/* Hero */}
        <header className="mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-[36px] font-bold leading-[1.04] tracking-[-0.035em] sm:text-[52px] ${
              dark ? "text-white" : "text-[#171717]"
            }`}
          >
            Hi, I'm Vivek.
          </motion.h1>

          <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
            <p
              className={`text-[13px] font-medium sm:text-[15px] ${
                dark ? "text-[#8e8e8e]" : "text-[#777]"
              }`}
            >
              MERN Stack Developer
            </p>

            <span
              className={dark ? "text-[#3b3b3b]" : "text-[#bdbdbd]"}
            >
              •
            </span>

            <button
              type="button"
              onClick={copyEmail}
              className={`inline-flex items-center gap-1.5 text-[12px] transition-colors sm:text-[14px] ${
                dark
                  ? "text-[#8e8e8e] hover:text-white"
                  : "text-[#777] hover:text-black"
              }`}
            >
              {EMAIL}
              <Copy size={13} />

              {copied && (
                <span
                  className={`text-[11px] ${
                    dark ? "text-white" : "text-[#222]"
                  }`}
                >
                  Copied
                </span>
              )}
            </button>
          </div>
        </header>

        {/* About */}
        <section className="mb-10">
          <h2 className="mb-1 text-[20px] font-bold tracking-[-0.025em] sm:text-[22px]">
            About
          </h2>

          <p
            className={`text-[14px] leading-6 sm:text-[16px] sm:leading-7 ${
              dark ? "text-[#a3a3a3]" : "text-[#666]"
            }`}
          >
            <span
              className={`font-semibold ${
                dark ? "text-[#f0f0f0]" : "text-[#222]"
              }`}
            >
              MERN Stack Developer
            </span>{" "}
            , building scalable and user-focused web applications with strong
            DSA fundamentals. Exploring Generative AI and LLM-powered
            applications.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-20">
          <h2 className="mb-5 text-[20px] font-bold tracking-[-0.025em] sm:text-[22px]">
            Skills
          </h2>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Chip key={skill}>{skill}</Chip>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-11">
          <h2 className="mb-6 text-[20px] font-bold tracking-[-0.025em] sm:text-[22px]">
            Achievements
          </h2>

          <div className="space-y-4">
            {achievements.map((item) => (
              <AchievementRow
                key={item.title}
                item={item}
                dark={dark}
              />
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-28">
          <div className="mb-9 text-center">
            <span className="inline-flex rounded-[7px] bg-[#f4f4f4] px-3 py-[6px] text-[12px] font-medium text-[#171717]">
              My Projects
            </span>

            <h2 className="mt-4 text-[31px] font-bold leading-[1.08] tracking-[-0.045em] sm:text-[40px]">
              Check out my latest work
            </h2>

            <p
              className={`mx-auto mt-3 max-w-[700px] text-[14px] leading-6 sm:text-[15px] sm:leading-7 ${
                dark ? "text-[#969696]" : "text-[#707070]"
              }`}
            >
              I’ve worked on real-world applications, from full-stack
              platforms to responsive interfaces. Here are a few of my
              projects.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                whileHover={{ y: -4 }}
                className={`flex min-h-[410px] flex-col overflow-hidden rounded-[10px] border transition-colors duration-300 ${
                  dark
                    ? "border-[#252525] bg-[#050505] hover:border-[#343434]"
                    : "border-[#e1e1e1] bg-white hover:border-[#cfcfcf]"
                }`}
              >
                <div
                  className={`h-[155px] shrink-0 overflow-hidden border-b ${
                    dark
                      ? "border-[#202020] bg-[#111]"
                      : "border-[#e5e5e5] bg-[#f5f5f5]"
                  }`}
                >
                  <video
                    src={project.image}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.025]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-[10px]">
                  <h3
                    className={`text-[17px] font-bold tracking-[-0.02em] sm:text-[18px] ${
                      dark ? "text-white" : "text-[#171717]"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`mt-2 text-[13px] font-medium sm:text-[14px] ${
                      dark ? "text-[#d2d2d2]" : "text-[#666]"
                    }`}
                  >
                    {project.date}
                  </p>

                  <p
                    className={`mt-2 text-[12px] leading-[1.5] sm:text-[13px] ${
                      dark ? "text-[#9a9a9a]" : "text-[#707070]"
                    }`}
                  >
                    {project.description}
                  </p>

                  <div className="mt-auto pt-5">
                    <div className="flex flex-wrap gap-[6px]">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-[6px] px-[8px] py-[5px] text-[10px] font-semibold leading-none sm:text-[11px] ${
                            dark
                              ? "bg-[#222] text-[#e5e5e5]"
                              : "bg-[#eeeeee] text-[#333]"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-3 flex flex-wrap gap-[6px]">
                      <ProjectAction
                        href={project.source}
                        type="Source"
                      />

                      <ProjectAction
                        href={project.live}
                        type="Demo"
                      />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mx-auto max-w-[720px] pb-10 text-center">
          <span className="inline-flex rounded-[7px] bg-[#f4f4f4] px-3 py-[6px] text-[12px] font-medium text-[#171717]">
            Contact
          </span>

          <h2 className="mt-4 text-[31px] font-bold leading-[1.08] tracking-[-0.045em] sm:text-[40px]">
            Get in Touch
          </h2>

          <p
            className={`mx-auto mt-4 max-w-[700px] text-[14px] leading-6 sm:text-[15px] sm:leading-7 ${
              dark ? "text-[#9a9a9a]" : "text-[#707070]"
            }`}
          >
            Have a project, question, or just want to say hello? Reach me
            directly through email and I’ll get back to you whenever I can.
          </p>

          <motion.button
            type="button"
            onClick={() => setContactOpen(true)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-6 inline-flex items-center gap-2 rounded-[7px] bg-[#f4f4f4] px-5 py-3 text-[14px] font-semibold text-[#171717] transition-colors hover:bg-white"
          >
            <Mail size={15} />
            Contact me
          </motion.button>
        </section>

        {/* Contact Modal */}
        {contactOpen && (
          <motion.div
            className={`fixed inset-0 z-[100] flex items-center justify-center px-5 backdrop-blur-[6px] ${
              dark ? "bg-black/80" : "bg-black/25"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setContactOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Contact form"
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 15,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 15,
              }}
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 28,
                mass: 0.65,
              }}
              onMouseDown={(event) => event.stopPropagation()}
              className={`relative w-full max-w-[540px] rounded-[10px] border p-5 shadow-[0_30px_100px_rgba(0,0,0,.25)] sm:p-6 ${
                dark
                  ? "border-[#2b2b2b] bg-[#101010]"
                  : "border-[#dedede] bg-white"
              }`}
            >
              {/* Close */}
              <button
                type="button"
                onClick={() => setContactOpen(false)}
                aria-label="Close contact form"
                className={`group absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-[7px] text-[21px] leading-none transition-all duration-200 ${
                  dark
                    ? "text-[#777] hover:bg-[#202020] hover:text-white"
                    : "text-[#999] hover:bg-[#f0f0f0] hover:text-[#222]"
                }`}
              >
                <span className="inline-block transition-transform duration-300 group-hover:rotate-90">
                  ×
                </span>
              </button>

              {/* Header */}
              <div
                className={`border-b pb-4 pr-10 ${
                  dark
                    ? "border-[#242424]"
                    : "border-[#e7e7e7]"
                }`}
              >
                <h3
                  className={`text-[23px] font-bold tracking-[-0.035em] sm:text-[25px] ${
                    dark
                      ? "text-[#f5f5f5]"
                      : "text-[#171717]"
                  }`}
                >
                  Get in Touch
                </h3>

                <p
                  className={`mt-1 text-[12px] leading-6 sm:text-[13px] ${
                    dark
                      ? "text-[#858585]"
                      : "text-[#777]"
                  }`}
                >
                  Have a project or question? Send me a message.
                </p>
              </div>

              {/* Form */}
              <form
                action="https://formspree.io/f/xqeywprw"
                method="POST"
                className="mt-5 space-y-3"
              >
                {/* Name + Email */}
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className={`h-[44px] w-full rounded-[7px] border px-3 text-[13px] outline-none transition-all duration-200 sm:h-[46px] sm:text-[14px] ${
                      dark
                        ? "border-[#292929] bg-[#171717] text-white placeholder:text-[#686868] hover:border-[#383838] focus:border-[#555] focus:bg-[#1a1a1a]"
                        : "border-[#dedede] bg-[#fafafa] text-[#171717] placeholder:text-[#999] hover:border-[#c8c8c8] focus:border-[#999] focus:bg-white"
                    }`}
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className={`h-[44px] w-full rounded-[7px] border px-3 text-[13px] outline-none transition-all duration-200 sm:h-[46px] sm:text-[14px] ${
                      dark
                        ? "border-[#292929] bg-[#171717] text-white placeholder:text-[#686868] hover:border-[#383838] focus:border-[#555] focus:bg-[#1a1a1a]"
                        : "border-[#dedede] bg-[#fafafa] text-[#171717] placeholder:text-[#999] hover:border-[#c8c8c8] focus:border-[#999] focus:bg-white"
                    }`}
                  />
                </div>

                {/* Subject */}
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className={`h-[44px] w-full rounded-[7px] border px-3 text-[13px] outline-none transition-all duration-200 sm:h-[46px] sm:text-[14px] ${
                    dark
                      ? "border-[#292929] bg-[#171717] text-white placeholder:text-[#686868] hover:border-[#383838] focus:border-[#555] focus:bg-[#1a1a1a]"
                      : "border-[#dedede] bg-[#fafafa] text-[#171717] placeholder:text-[#999] hover:border-[#c8c8c8] focus:border-[#999] focus:bg-white"
                  }`}
                />

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="How can I help you?"
                  rows="5"
                  required
                  className={`w-full resize-none rounded-[7px] border px-3 py-3 text-[13px] leading-6 outline-none transition-all duration-200 sm:text-[14px] ${
                    dark
                      ? "border-[#292929] bg-[#171717] text-white placeholder:text-[#686868] hover:border-[#383838] focus:border-[#555] focus:bg-[#1a1a1a]"
                      : "border-[#dedede] bg-[#fafafa] text-[#171717] placeholder:text-[#999] hover:border-[#c8c8c8] focus:border-[#999] focus:bg-white"
                  }`}
                />

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex h-[45px] w-full items-center justify-center gap-2 rounded-[7px] bg-[#f1f1f1] text-[14px] font-semibold text-[#151515] transition-all duration-200 hover:bg-white hover:shadow-[0_8px_25px_rgba(255,255,255,.08)]"
                >
                  Send Message
                  <ArrowUpRight size={15} />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </div>

      <Dock dark={dark} setDark={setDark} />
    </main>
  );
}

export default App;