import Profile from "@/app/components/Profile";
import Experience from "@/app/components/Experience";
import Education from "@/app/components/Education";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Code2,
  FlaskConical,
  Award,
  ExternalLink,
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "C", "C++"],
  },
  {
    title: "Web & Frameworks",
    skills: [
      "React.js",
      "Next.js",
      "Django",
      "Node.js",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "OpenAI",
      "Agentic AI",
      "scikit-learn",
      "TensorFlow",
      "XGBoost",
      "SHAP",
      "Word2Vec",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "Firebase Firestore", "NoSQL"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "CI/CD", "Firebase"],
  },
  {
    title: "Testing & Tools",
    skills: [
      "PyTest",
      "Jest",
      "Selenium",
      "Appium",
      "Git",
      "GitHub",
      "VS Code",
      "IntelliJ IDEA",
    ],
  },
];

const certifications = [
  {
    name: "Problem Solving",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/0a7e6d1c0e5a",
  },
  {
    name: "Python Basic",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com",
  },
  {
    name: "Java Basic",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com",
  },
  {
    name: "React Fundamentals",
    issuer: "Coursera",
    link: "https://www.coursera.org",
  },
];

const researchInterests = [
  {
    icon: <FlaskConical className="w-5 h-5 text-blue-600" />,
    title: "Machine Learning & Ensemble Methods",
    desc: "XGBoost, Random Forest, LightGBM, stacking ensembles applied to real-world tabular datasets.",
  },
  {
    icon: <BookOpen className="w-5 h-5 text-blue-600" />,
    title: "Explainable AI (XAI)",
    desc: "SHAP-based model interpretability for healthcare, finance, and social science applications.",
  },
  {
    icon: <Code2 className="w-5 h-5 text-blue-600" />,
    title: "NLP & Transformer Architectures",
    desc: "BERT, RoBERTa, and transformer models for fraud detection, text classification, and information extraction.",
  },
  {
    icon: <Award className="w-5 h-5 text-blue-600" />,
    title: "Agentic AI & LLM Systems",
    desc: "Building autonomous AI agents using OpenAI APIs, tool use, and multi-step reasoning pipelines.",
  },
];

const highlights = [
  { number: "50+", label: "PROJECTS COMPLETED" },
  { number: "3+", label: "RESEARCH PUBLICATIONS" },
  { number: "3+", label: "YEARS OF EXPERIENCE" },
  { number: "8+", label: "CERTIFIED SKILLS" },
  { number: "3.69", label: "B.SC GPA" },
  { number: "99.44", label: "BEST MODEL ACCURACY" },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* ── Hero header ── */}
      <Profile />

      {/* ── Quick Stats ── */}

      <section className="border-t border-b border-gray-100 bg-slate-50">
        <div className="w-full bg-gray-100 py-6">
          <div className="max-w-5xl mx-auto px-4">
            {/* Scroll wrapper for mobile */}
            <div className="overflow-x-auto">
              <div className="min-w-[700px] bg-white rounded-lg shadow-sm grid grid-cols-6 divide-x divide-gray-200">
                {highlights.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center py-6 px-4 text-center"
                  >
                    {/* Number */}
                    <div className="flex items-baseline">
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#1a3a4a]">
                        {stat.number}
                      </span>
                    </div>

                    {/* Label */}
                    <p className="mt-1 text-[9px] sm:text-[10px] font-semibold tracking-widest text-gray-400 uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Professional Summary ── */}
      <section className="max-w-5xl mx-auto px-6 py-12 border-b border-gray-100">
        <h2 className="text-2xl font-light text-gray-900 border-b border-sky-950 pb-3 mb-6">
          Professional Summary
        </h2>
        <div className="max-w-3xl space-y-4 text-gray-700 leading-relaxed text-base">
          <p>
            Data Scientist and AI/ML Engineer with 3+ years of experience
            delivering data-driven solutions, predictive models, and AI-powered
            systems. Holds a{" "}
            <strong>B.Sc. foundation in Data Science and AI</strong>{" "}
            from Metropolitan University, Bangladesh.
          </p>
          <p>
            Author of peer-reviewed{" "}
            <Link
              href="/pages/publications"
              className="text-blue-600 hover:underline font-medium"
            >
              research publications
            </Link>{" "}
            in Machine Learning, NLP, and applied AI — including projects on
            education analytics, predictive modeling, and social impact
            solutions using ensemble learning, SHAP explainability, and advanced
            ML algorithms.
          </p>
          <p>
            Proficient in Python, R, SQL, TensorFlow, PyTorch, scikit-learn, and
            Power BI. Experienced in NLP, data visualization, statistical
            modeling, and building scalable analytical systems. Strong
            foundation in OOP, algorithms, and data structures, with hands-on
            experience developing impactful research and industry projects.
            Maintains{" "}
            <Link
              href="/pages/artifacts"
              className="text-blue-600 hover:underline font-medium"
            >
              open-source projects
            </Link>
            . Committed to continuous learning, innovation, and applying AI for
            real-world impact.
          </p>
        </div>
      </section>

      {/* ── Research Interests ── */}
      <section className="max-w-5xl mx-auto px-6 py-12 border-b border-gray-100">
        <h2 className="text-2xl font-light text-gray-900 border-b border-gray-200 pb-3 mb-8">
          Research Interests
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {researchInterests.map((r, i) => (
            <div
              key={i}
              className="flex gap-4 p-4 border border-gray-100 hover:border-blue-200 transition-colors duration-200"
            >
              <div className="p-2 bg-blue-50 rounded h-fit">{r.icon}</div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  {r.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Experience ── */}
      <Experience />

      {/* ── Education ── */}
      <Education />

      {/* ── Technical Skills ── */}
      <section className="max-w-5xl mx-auto px-6 py-12 border-t border-gray-100">
        <h2 className="text-2xl font-light text-gray-900 border-b border-gray-200 pb-3 mb-8">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <div key={i}>
              <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-3">
                {cat.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-sm bg-gray-50 border border-gray-200 text-gray-700 rounded hover:border-blue-300 hover:text-blue-600 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
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

      {/* ── Certifications ── */}
      <section className="max-w-5xl mx-auto px-6 py-12 border-t border-gray-100">
        <h2 className="text-2xl font-light text-gray-900 border-b border-gray-200 pb-3 mb-8">
          Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-gray-200 p-4 hover:border-blue-300 transition-colors duration-200 block"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">
                    {cert.name}
                  </p>
                  <p className="text-xs text-gray-500">{cert.issuer}</p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gray-300 group-hover:text-blue-400 flex-shrink-0 mt-0.5 transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-slate-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-light text-gray-900 mb-1">
              Interested in working together?
            </h3>
            <p className="text-sm text-gray-600">
              Open to full-time roles, freelance projects, and research
              collaborations.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              href="/pages/contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Contact Me <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pages/publications"
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 text-sm font-medium hover:border-blue-600 hover:text-blue-600 transition-colors duration-200"
            >
              Publications
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
