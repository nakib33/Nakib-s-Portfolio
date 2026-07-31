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
  GraduationCap,
  User,
  Code,
  FileText,
  BookOpen,
} from "lucide-react";
import { projects } from "@/data/projects";

const HomePage = () => {
  const skills = {
    "Programming Languages": [
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      { name: "SQL", icon: null },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      { name: "C", icon: null },
      {
        name: "C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      },
    ],
    "AI / Machine Learning": [
      {
        name: "PyTorch",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      },
      { name: "Machine Learning", icon: null },
      { name: "Deep Learning", icon: null },
      { name: "Computer Vision", icon: null },
      { name: "NLP", icon: null },
      { name: "OpenAI API", icon: null },
      {
        name: "scikit-learn",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
      },
      { name: "OpenCV", icon: null },
      {
        name: "Pandas",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      },
      {
        name: "NumPy",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
      },
      { name: "Matplotlib", icon: null },
    ],
    "Web Development & APIs": [
      {
        name: "FastAPI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      { name: "HTML5", icon: null },
      { name: "CSS3", icon: null },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
    ],
    "Data Analytics & Visualization": [
      { name: "Power BI", icon: null },
      { name: "Microsoft Excel", icon: null },
      { name: "Tableau", icon: null },
      { name: "Plotly", icon: null },
      { name: "Looker Studio", icon: null },
    ],
    Databases: [
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      { name: "MySQL", icon: null },
      { name: "MongoDB", icon: null },
    ],
  };

  const interestedAreas = [
    "Healthcare AI",
    "Artificial Intelligence (AI)",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Medical Imaging",
    "Explainable AI (XAI)",
    "Bioinformatics",
    "NLP",
    "Urban Analytics",
    "Multimodal AI",
    "Trustworthy AI",
  ];

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Nakib_CV.pdf";
    link.download = "Nakib_CV.pdf";
    link.click();
  };

  const featuredProjects = projects.slice(0, 3);

  const publications = [
    {
      title: "AI-Driven Housing Affordability Forecasting in New York City",
      venue: "Springer — Applied Spatial Analysis and Policy",
      year: 2026,
    },
    {
      title: "Enhancing Online Recruitment Fraud Detection Using Gradient Boosting & Transformers",
      venue: "IJCA",
      year: 2026,
    },
    {
      title: "CV-Mamba: Gated CNN Transfer Learning for Mango Leaf Disease Detection",
      venue: "Frontiers",
      year: 2025,
    },
    {
      title: "Soft Voting Ensemble Learning for Maternal & Fetal Health Risk Stratification",
      venue: "IEEE Xplore",
      year: 2026,
    },
    {
      title: "PolyDetect: Hybrid Deep Learning for Robust Polyp Segmentation",
      venue: "Science Direct — IJMI",
      year: 2026,
    },
    {
      title: "Four-Class GI Risk Stratification Using Lightweight CNN–Transformer",
      venue: "Springer — MBEC",
      year: 2026,
    },
    {
      title: "Cross-Domain Transfer Learning for Brain Tumor Classification Under Limited MRI Data",
      venue: "Springer — MBEC",
      year: 2026,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 lg:py-14">
        {/* Background Grid */}
        <div className="linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_260px] gap-x-8 gap-y-2 md:gap-y-4 md:items-center">
          {/* PART A — Tags + Name (above image on mobile, left column on desktop) */}
          <div className="md:col-start-1 md:row-start-1">
            {/* Tags */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {[
                "AI / ML Engineer & Researcher",
                "Data Scientist",
                "Data Analytics",
              ].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] tracking-widest uppercase px-3 py-1 border border-gray-300 text-gray-700 font-bold rounded-sm bg-gray-100"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Name Logo Style */}
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide text-gray-900 mb-2">
              <span className="text-sky-900">Nakib</span> Uddin Ahmed<span className="text-sky-900">.</span>
            </h1>

            {/* Divider — hidden on mobile, shown on desktop */}
            <div className="hidden md:block w-10 h-1 bg-sky-950 mb-2" />
          </div>

          {/* RIGHT SIDE — image + stats + social (appears between name and bio on mobile) */}
          <div className="relative flex flex-col items-center gap-4 md:col-start-2 md:row-start-1 md:row-span-2">
            {/* Divider on mobile only */}
            <div className="md:hidden w-10 h-1 bg-sky-950 mb-1" />

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
                ["25+", "Projects"],
                ["4+", "Papers"],
              ].map(([num, label]) => (
                <div key={label} className="flex-1 text-center py-2">
                  <div className="text-sky-900 text-xl font-bold">{num}</div>
                  <div className="text-xs text-sky-950">{label}</div>
                </div>
              ))}
            </div>

            {/* Social icons with circle background */}
            <div className="flex items-center gap-4 justify-center">
              <a
                href="https://www.linkedin.com/in/nakib33/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/nakib33"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white hover:bg-gray-600 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="mailto:nakibuddin33@gmail.com"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white hover:bg-red-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://scholar.google.com/citations?user=PLACEHOLDER"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white hover:bg-blue-700 transition-colors"
                aria-label="Google Scholar"
              >
                <GraduationCap className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile divider below social */}
            <div className="md:hidden w-10 h-1 bg-sky-950 mt-1" />
          </div>

          {/* PART B — Bio + Education + Buttons (below image on mobile, left column on desktop) */}
          <div className="md:col-start-1 md:row-start-2">
            <p className="text-gray-600 mb-4 text-base md:text-lg leading-relaxed text-justify">
              <strong className="text-gray-700 font-semibold">
                AI researcher
              </strong>{" "}
              and machine learning engineer working at the intersection of
              Healthcare AI, Urban Analytics, and Explainable Machine Learning.
              My research focuses on developing{" "}
              <strong className="text-gray-700 font-semibold">
                trustworthy and interpretable AI systems
              </strong>{" "}
              for medical imaging, bioinformatics, public health, fraud
              detection, and predictive modeling. Research interests include
              Deep Learning, Computer Vision, NLP, Multimodal AI, and
              AI for Healthcare.
            </p>
            <p className="text-gray-600 mb-4 text-base md:text-lg leading-relaxed text-justify">
              Beyond research, builds production-ready AI applications using{" "}
              <strong className="text-gray-700 font-semibold">
                PyTorch, FastAPI, React, Next.js, Docker, and AWS
              </strong>
              , transforming ML models into scalable systems. Long-term goal is
              to advance{" "}
              <strong className="text-gray-700 font-semibold">
                trustworthy AI
              </strong>{" "}
              by integrating multimodal data and decision-support systems for
              healthcare, smart cities, and data-driven policy.
            </p>

            {/* Education badges - reduced size */}
            <div className="flex flex-col gap-1 mb-8">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></span>
                <span className="text-sm text-gray-500">
                  <strong className="text-gray-700">M.Sc. Information Technology</strong> — SUST
                  (3.88/4.00)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></span>
                <span className="text-sm text-gray-500">
                  <strong className="text-gray-700">B.Sc. Computer Science &amp; Engineering</strong> —
                  Metropolitan University (3.69/4.00)
                </span>
              </div>
            </div>

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
          </div>
        </div>
      </section>

      {/* ── Quick Links / Learn More ── */}
      <section id="info" className="border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 text-center">
          <p className="text-xl font-bold text-gray-900 mb-8">
            Learn more about my
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/pages/about"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-gray-800 text-white border border-gray-800 rounded-md text-base font-semibold hover:bg-white hover:text-black hover:border-gray-300 hover:scale-105 transition-all duration-200"
            >
              <User className="w-5 h-5" /> About
            </Link>
            <Link
              href="/pages/artifacts"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-gray-800 text-white border border-gray-800 rounded-md text-base font-semibold hover:bg-white hover:text-black hover:border-gray-300 hover:scale-105 transition-all duration-200"
            >
              <Code className="w-5 h-5" /> Projects
            </Link>
            <Link
              href="/pages/publications"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-gray-800 text-white border border-gray-800 rounded-md text-base font-semibold hover:bg-white hover:text-black hover:border-gray-300 hover:scale-105 transition-all duration-200"
            >
              <FileText className="w-5 h-5" /> Papers
            </Link>
            <Link
              href="/pages/blogs"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-gray-800 text-white border border-gray-800 rounded-md text-base font-semibold hover:bg-white hover:text-black hover:border-gray-300 hover:scale-105 transition-all duration-200"
            >
              <BookOpen className="w-5 h-5" /> Blog
            </Link>
            <Link
              href="/pages/contact"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-gray-800 text-white border border-gray-800 rounded-md text-base font-semibold hover:bg-white hover:text-black hover:border-gray-300 hover:scale-105 transition-all duration-200"
            >
              <Mail className="w-5 h-5" /> Contact
            </Link>
          </div>
        </div>
      </section>

      {/* ── Areas of Interest ── */}
      <section className="border-b border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Areas of Interest
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
            {interestedAreas.map((area, i) => (
              <div
                key={i}
                className="bg-gray-800 text-white border border-gray-700 rounded-md px-3.5 py-2.5 text-center hover:bg-white hover:text-gray-900 hover:border-gray-300 hover:scale-105 transition-all duration-200 cursor-default"
              >
                <span className="text-xs font-medium">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Technologies &amp; Tools
          </h2>

          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="mb-6 last:mb-0">
              <p className="text-sm tracking-widest uppercase text-sky-800 mb-4">
                {category}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {items.map(({ name, icon }) => (
                  <div
                    key={name}
                    className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 rounded-md bg-white hover:border-gray-300 hover:bg-gray-50 transition-colors cursor-default"
                  >
                    {icon ? (
                      <img
                        src={icon}
                        alt={name}
                        className="w-[18px] h-[18px] object-contain"
                      />
                    ) : (
                      <span className="text-base leading-none">{
                        {
                          SQL: "🔷",
                          C: "🔶",
                          "Machine Learning": "🤖",
                          "Deep Learning": "🧠",
                          "Computer Vision": "👁️",
                          NLP: "💬",
                          "OpenAI API": "⚡",
                          OpenCV: "📷",
                          Matplotlib: "📉",
                          HTML5: "🌐",
                          CSS3: "🎨",
                          "Power BI": "📊",
                          "Microsoft Excel": "📗",
                          Tableau: "📈",
                          Plotly: "🔍",
                          "Looker Studio": "👀",
                          MySQL: "🗄️",
                          MongoDB: "🍃",
                        }[name] || "•"
                      }</span>
                    )}
                    <span className="text-sm text-gray-700 whitespace-nowrap">
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              Featured Projects
            </h2>
            <Link
              href="/pages/artifacts"
              className="text-sm text-sky-700 hover:text-sky-900 flex items-center gap-1 font-medium"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredProjects.map((project, i) => (
              <div
                key={i}
                className="group border border-gray-200 rounded-md overflow-hidden hover:border-sky-300 hover:shadow-sm transition-all duration-200"
              >
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-1.5 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <Link
                    href={`/pages/artifacts/${project.slug}`}
                    className="inline-flex items-center gap-1 text-xs text-sky-700 hover:text-sky-900 font-medium mt-3"
                  >
                    View Project <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Research / Publications ── */}
      <section className="bg-slate-50 border-b border-gray-100">
        <br /> <br />
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-col gap-3 max-w-sm">
              <p className="text-lg font-semibold tracking-widest text-gray-400 uppercase">
                Research
              </p>
              <h2 className="text-3xl font-bold text-gray-800">
                Publications &amp; Research
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                Exploring ML applications in astronomy and applied AI systems.
                Author of peer-reviewed papers on machine learning and applied AI.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/pages/publications"
                className="inline-flex items-center gap-2 border border-gray-800 hover:border-gray-500 text-gray-700 hover:text-gray-900 text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-md transition duration-300"
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
      <section className="border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Let&apos;s Work Together
              </h2>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                Open to research collaborations, freelance projects, and full-time
                opportunities.
              </p>
            </div>
            <Link
              href="/pages/contact"
              className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium px-7 py-3 rounded-md transition-all duration-200 shrink-0 w-fit"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
