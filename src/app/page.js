"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { projects } from "@/data/projects";

const HomePage = () => {
  const skills = [
    "Python",
    "JavaScript",
    "React",
    "Next.js",
    "Django",
    "TensorFlow",
    "Machine Learning",
    "AWS",
    "Docker",
    "PostgreSQL",
    "Git",
    "scikit-learn",
  ];

  const skill = {
    "Languages & Frameworks": [
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Django",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      },
      {
        name: "FastAPI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
    ],
    "AI / ML & Data": [
      {
        name: "TensorFlow",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      },
      {
        name: "PyTorch",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      },
      {
        name: "scikit-learn",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
      },
      {
        name: "Pandas",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      },
      { name: "LangChain", icon: null },
      { name: "OpenAI API", icon: null },
    ],
    "Infrastructure & DevOps": [
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Kubernetes",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      { name: "MLflow", icon: null },
    ],
  };

  const stats = [
    { number: "50", label: "PROJECTS COMPLETED" },
    { number: "4", label: "Research Paper" },
    { number: "3", label: "YEARS OF EXPERIENCE" },
    { number: "15", label: "TECHNOLOGIES" },
  ];

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Nakib_CV.pdf";
    link.download = "Nakib_CV.pdf";
    link.click();
  };

  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="max-w-5xl mx-auto px-3 sm:px-6 py-8 lg:py-14">
        {/* Background Grid */}
        <div className="linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_260px] gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Tags */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {[
                "AI / ML Engineer & Researcher",
                "Data Scientist",
                "Data Analytics",
              ].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] tracking-widest uppercase px-3 py-1 border border-sky-950/40 text-sky-950 font-bold rounded-sm bg-sky-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Name Logo Style */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide text-gray-900 mb-4">
              <span className="text-sky-900">Nakib</span> Uddin <br />
              Ahmed<span className="text-sky-900">.</span>
            </h1>

            {/* Divider */}
            <div className="w-10 h-1 bg-sky-950 mb-5" />

            {/* Bio */}
            <p className="text-gray-500 mb-6 max-w-xl">
              <strong className="text-sky-950">
                Data Scientist and AI/ML Engineer & Researcher
              </strong>{" "}
              with 3+ years of experience delivering data-driven solutions and
              predictive models. Author of peer-reviewed publications in Machine
              Learning and AI. Skilled in Python, R, SQL, TensorFlow, PyTorch,
              and Power BI. Specializes in NLP, data visualization, and building
              scalable analytical systems that drive business impact.
            </p>
            {/* Education badges */}
            <div className="flex flex-col gap-1.5 text-sm text-gray-500 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></span>
                <span>
                  B.Sc. Computer Science & Engineering — Metropolitan
                  University, Bangladesh
                </span>
              </div>
            </div>
            <br />
            {/* Buttons */}
            <div className="flex gap-3 flex-wrap mb-8">
              <Link
                href="/pages/about"
                className="flex items-center gap-2 px-6 py-3 bg-sky-950 text-white rounded hover:bg-sky-900 transition"
              >
                View Portfolio
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/pages/contact"
                className="px-6 py-3 border border-sky-800 text-sky-950 rounded hover:border-sky-900 transition"
              >
                Contact Me
              </Link>

              <button
                onClick={downloadCV}
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded hover:bg-gray-700 transition"
              >
                <Download size={14} /> Download CV
              </button>
            </div>
            {/* Social icons */}
            <div className="flex items-center gap-5 justify-center lg:justify-start pt-1">
              <a
                href="https://www.linkedin.com/in/azizur-rahman-720636165/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/ayanchyaziz123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:azizurusa22@gmail.com"
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col items-center gap-4">
            {/* Avatar */}
            <div className="relative w-[220px] h-[260px]">
              <div className="absolute -inset-2 border border-sky-900 rounded rotate-2" />

              <div className="absolute inset-0 rounded overflow-hidden">
                <Image
                  src="/nakib.png"
                  alt="Nakib Uddin Ahmed"
                  width={220}
                  height={260}
                  className="object-cover rounded"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="flex w-[200px] divide-x bg-gray-50 rounded overflow-hidden">
              {[
                ["3+", "Years"],
                ["12+", "Projects"],
                ["5+", "Papers"],
              ].map(([num, label]) => (
                <div key={label} className="flex-1 text-center py-2">
                  <div className="text-sky-900 text-xl font-bold">{num}</div>
                  <div className="text-xs text-sky-950">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-t border-b border-gray-100 bg-slate-50">
        <div className="w-full bg-gray-100 py-10">
          {/* Constrained to content area - matching your blue marked width */}
          <div className="max-w-5xl mx-auto px-4">
            {/* Stats Card */}
            <div className="w-full bg-white rounded-lg shadow-sm grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-200">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start justify-center py-10 px-10"
                >
                  {/* Number + Plus */}
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold text-[#1a3a4a]">
                      {stat.number}
                    </span>
                    <span className="text-3xl font-extrabold text-sky-800">
                      +
                    </span>
                  </div>

                  {/* Label */}
                  <p className="mt-2 text-[10px] font-semibold tracking-widest text-gray-400 uppercase leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 py-6 sm:py-10">
          <p className="text-lg font-medium tracking-widest uppercase font-bold text-sky-800 mb-5">
            Technologies &amp; Tools
          </p>

          {Object.entries(skill).map(([category, items]) => (
            <div key={category} className="mb-8">
              <p className="text-xs font-medium tracking-widest uppercase text-sky-900 mb-5">
                {category}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {items.map(({ name, icon }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 px-3.5 py-2 border border-gray-200 rounded-lg bg-white hover:border-gray-400 transition-colors cursor-default"
                  >
                    {icon && (
                      <img
                        src={icon}
                        alt={name}
                        className="w-[18px] h-[18px] object-contain"
                      />
                    )}
                    <span className="text-[13px] text-gray-800 whitespace-nowrap">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="border-b border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 py-6 sm:py-12">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-light text-gray-900">
              Featured Projects
            </h2>
            <Link
              href="/pages/artifacts"
              className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <div
                key={i}
                className="group border border-gray-200 rounded overflow-hidden hover:border-blue-300 hover:shadow-sm transition-all duration-200"
              >
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2">
                    {project.description}
                  </p>
                  <Link
                    href={`/pages/artifacts/${project.slug}`}
                    className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 mt-3"
                  >
                    View Project <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Research highlight ── */}

      <section className="bg-slate-50 border-b border-gray-100">
        <br /> <br />
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* ===== LEFT SIDE ===== */}
            <div className="flex flex-col gap-3 max-w-sm">
              {/* Small Label */}
              <p className="text-lg font-semibold tracking-widest text-gray-400 uppercase">
                Research
              </p>

              {/* Heading */}
              <h2 className="text-3xl font-bold text-sky-900">
                Publications &amp; Research
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed">
                Exploring ML applications in astronomy and applied AI systems.
                Author of peer-reviewed papers on machine learning and applied
                AI.
              </p>
            </div>

            {/* ===== RIGHT SIDE - Button ===== */}
            <div className="flex-shrink-0">
              <Link
                href="/pages/publications"
                className="inline-flex items-center gap-2 border border-sky-900 hover:border-gray-500 text-gray-700 hover:text-gray-900 text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-md transition duration-300"
              >
                View Publications
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
        <br /> <br />
      </section>

      {/* ── CTA ── */}
      <section className="w-full bg-white py-20 px-4 flex flex-col items-center justify-center text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mb-4 tracking-tight">
          Let&apos;s Work Together
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-500 max-w-2xl mb-10 leading-relaxed">
          Open to research collaborations, freelance projects, and full-time
          opportunities.
        </p>

        {/* Button */}
        <button className="flex items-center gap-2 border border-sky-900 hover:border-gray-500 text-gray-700 hover:text-gray-900 text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-md transition duration-300">
          Get In Touch
          <span className="text-sm">→</span>
        </button>
      </section>
    </div>
  );
};

export default HomePage;
