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

const skillsData = {
  Languages: ["Python", "JavaScript", "C", "C++", "Java", "R", "SQL"],
  "Web & Frameworks": [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Django",
    "HTML",
    "CSS",
    "Tailwind CSS",
  ],
  "AI & Machine Learning": [
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Deep Learning",
    "NLP",
    "RAG",
    "Agentic AI",
    "GAN",
    "Transformers",
    "Ai Automation",
    "GBDT",
    "Supervised",
    "Unsupervised",
    "Reinforcement",
  ],
  "Data & Analytics": [
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Plotly",
    "Power BI",
    "Tableau",
    "Excel",
    "Looker Studio",
  ],
  "Databases & Big Data": [
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "BigQuery",
    "Snowflake",
    "Firebase Firestore",
  ],
  "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "CI/CD", "Git", "GitHub"],
  "Data Engineering": [
    "ETL",
    "Web Scraping",
    "Data Cleaning",
    "Data Warehouse",
  ],
  "Statistics & ML Concepts": [
    "EDA",
    "A/B Testing",
    "Time Series",
    "Regression",
    "K-Means",
    "PCA",
    "Bias-Variance",
    "F1 Score",
  ],
};
const certifications = [
  {
    name: "Data Analytics",
    issuer: "Interactive Cares",
    link: "https://drive.google.com/file/d/1V9-Iqk1DG4iwvmYVZ31XUI98TTYQ1Urx/view?usp=drive_link",
  },
  {
    name: "Data Science & Machine Learning ",
    issuer: "Interactive Cares",
    link: "https://drive.google.com/file/d/1LxDQ6HaH1Jiy0qEM1njYSj9RdHJmv5_M/view?usp=drive_link",
  },
  {
    name: "Data Analyst",
    issuer: "Tutorials Point Bangladesh",
    link: "https://drive.google.com/file/d/1j0jBb9eF0soJWGT6-v5wxTTmajo_IC9O/view?usp=drive_link",
  },
  {
    name: "Applied Data Science with Python",
    issuer: "Simplilearn",
    link: "https://drive.google.com/file/d/1OS5NmDzFltee9YY6BtN_go2RRrppxhsq/view?usp=drive_link",
  },
  {
    name: "Exploring Data Transformation",
    issuer: "Google Cloud",
    link: "https://drive.google.com/file/d/1uS-LCzAaXU7OuwhGqcNHGTXV-22bPkOm/view?usp=drive_link",
  },
  {
    name: "Python Basic",
    issuer: "HackerRank",
    link: "https://drive.google.com/file/d/1BG57TDSjfzdceskgz-061hHSzvmPuQGE/view?usp=drive_link",
  },
  {
    name: "SQL(Beginner to Advanced)",
    issuer: "HackerRank",
    link: "https://drive.google.com/file/d/1GNSIH51MMPaR19NQ4s0Dc-sNu2c3r1ZU/view?usp=drive_link",
  },
  {
    name: "Pandas",
    issuer: "Kaggle",
    link: "https://drive.google.com/file/d/1-dx9NQBNCUxs5nHNuSk3WgpOv1pkJmGa/view?usp=drive_link",
  },
  {
    name: "TREE PLANTATION INITIATIVE",
    issuer: "MUSSC",
    link: "https://drive.google.com/file/d/18uMI_1cMdHz4Q1dc6QCEVFcGMBJwziHA/view?usp=drive_link",
  },
  {
    name: "Idea Sharing 2020",
    issuer: "Hours of Code",
    link: "https://drive.google.com/file/d/1lA3kaNW3XW8WWytLCr9wSS0qK8BeJ-zK/view?usp=drive_link",
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
            <strong>B.Sc. foundation in Data Science and AI</strong> from
            Metropolitan University, Bangladesh.
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
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4 tracking-wide">
                {category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 transition"
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
      <section
        id="contact"
        className="bg-slate-50 border-t relative overflow-hidden bg-gradient-to-br from-sky-900 to-sky-800 py-20 px-6 text-center"
      >
        {/* Background circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-white/10" />
        <div className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full border border-white/10" />

        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Heading */}
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold text-white mb-3">
            Interested in working together?
          </h2>

          {/* Description */}
          <p className="text-sky-200 text-sm leading-relaxed mb-8">
            Open to full-time roles, freelance projects, and research
            collaborations.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-7">
            <a
              href="mailto:nakibuddin33@gmail.com"
              className="px-6 py-2.5 rounded-full bg-white text-sky-900 font-bold text-sm shadow-md hover:shadow-lg transition"
            >
              Contact Me
            </a>

            <a
              href="https://www.linkedin.com/in/nakib33"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full border border-white/40 text-sky-100 font-medium text-sm hover:bg-white/10 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/nakib33"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full border border-white/40 text-sky-100 font-medium text-sm hover:bg-white/10 transition"
            >
              GitHub
            </a>
          </div>

          {/* Footer Info */}
          <p className="text-sky-300 text-ls">
            📞 +880 1646-819354 &nbsp;·&nbsp; ✉ nakibuddin33@gmail.com
            &nbsp;·&nbsp; linkedin.com/in/nakib33
          </p>
        </div>
      </section>
    </div>
  );
}
