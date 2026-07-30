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
  BrainCircuit,
  Eye,
  Globe,
} from "lucide-react";

const skillsData = {
  Languages: ["Python", "SQL", "JavaScript", "C", "C++", "Java"],
  "Web & Frameworks": [
    "React",
    "Next.js",
    "FastAPI",
    "HTML5",
    "CSS3",
    "REST APIs",
    "JSON",
  ],
  "AI & Machine Learning": [
    "PyTorch",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "NLP",
    "LLM",
    "Transformers",
    "Multimodal AI",
    "Explainable AI (XAI)",
    "Ensemble Learning",
  ],
  "Data & Analytics": [
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Plotly",
    "Power BI",
    "Tableau",
    "Microsoft Excel",
    "Looker Studio",
  ],
  Databases: ["PostgreSQL", "MySQL", "MongoDB"],
  "Cloud & DevOps": ["AWS", "Docker", "Git", "GitHub", "Linux", "CI/CD", "MLOps"],
  "Data Engineering": [
    "Data Cleaning",
    "Data Preprocessing",
    "Feature Engineering",
    "ETL",
    "Data Collection",
    "Web Scraping",
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
  "Testing & Tools": [
    "PyTest",
    "Jest",
    "Selenium",
    "Appium",
    "Git",
    "GitHub",
    "VS Code",
    "IntelliJ IDEA",
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
    icon: <BrainCircuit className="w-5 h-5 text-[#1a3a4a]" />,
    title: "Artificial Intelligence & Machine Learning",
    desc: "Artificial Intelligence, Machine Learning, Deep Learning, Foundation Models, Large Language Models (LLMs), Natural Language Processing (NLP), Transformers, Vision Transformers (ViTs), Multimodal Learning, Reinforcement Learning, Representation Learning, and Self-Supervised Learning.",
  },
  {
    icon: <Eye className="w-5 h-5 text-[#1a3a4a]" />,
    title: "Computer Vision & Biomedical AI",
    desc: "Computer Vision, Medical Imaging, Biomedical Image Analysis, Bioinformatics, Healthcare AI, Precision Medicine, Clinical Decision Support Systems, Medical Image Segmentation, Medical Image Classification, Disease Risk Prediction, and AI for Digital Health.",
  },
  {
    icon: <FlaskConical className="w-5 h-5 text-[#1a3a4a]" />,
    title: "Explainable AI & Intelligent Data Analytics",
    desc: "Explainable Artificial Intelligence (XAI), Trustworthy AI, Responsible AI, Predictive Analytics, Time Series Forecasting, Ensemble Learning, Graph Machine Learning, Anomaly Detection, Fraud Detection, Decision Intelligence, and Uncertainty Estimation.",
  },
  {
    icon: <Globe className="w-5 h-5 text-[#1a3a4a]" />,
    title: "Geospatial AI & Intelligent Systems",
    desc: "Geospatial AI, Urban Analytics, Urban Computing, Spatial Data Science, GIS & Remote Sensing, Intelligent Transportation Systems, Human Mobility Analytics, AI for Sustainable Development, MLOps, AI Systems Engineering, Edge AI, Cloud AI, and Distributed Machine Learning.",
  },
];

const highlights = [
  { number: "50+", label: "PROJECTS COMPLETED" },
  { number: "7+", label: "RESEARCH PUBLICATIONS" },
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
        <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-800 pb-3 mb-6">
          Professional Summary
        </h2>
        <div className="w-full space-y-4 text-gray-700 leading-relaxed text-base text-justify">
          <p>
            AI Researcher and Machine Learning Engineer with 3+ years of experience developing intelligent, data-driven systems across healthcare, bioinformatics, geospatial analytics, urban computing, and predictive modeling. Earned a B.Sc. in Computer Science &amp; Engineering (CGPA: 3.69/4.00) from Metropolitan University, Bangladesh, and an M.Sc. in Information Technology (CGPA: 3.88/4.00) from Shahjalal University of Science and Technology (SUST), Bangladesh. Passionate about advancing trustworthy, scalable, and interpretable AI that bridges fundamental research with real-world deployment.
          </p>
          <p>
            Author of multiple peer-reviewed research publications in internationally recognized journals, with contributions spanning Medical Imaging, Explainable Artificial Intelligence (XAI), Bioinformatics, Computer Vision, Natural Language Processing (NLP), Healthcare AI, Recruitment Fraud Detection, Housing Affordability Forecasting, Geospatial AI, Urban Analytics, and Ensemble Machine Learning. My research focuses on designing robust AI models that improve decision-making, enhance predictive performance, and deliver measurable societal impact through responsible and explainable artificial intelligence.
          </p>
          <p>
            Proficient in Python, PyTorch, scikit-learn, SQL, FastAPI, React, Next.js, Docker, AWS, Power BI, Git, and Linux, with expertise in Deep Learning, Computer Vision, Vision Transformers (ViTs), Large Language Models (LLMs), Multimodal AI, Explainable AI (XAI), Predictive Analytics, Time Series Forecasting, MLOps, and AI Systems Engineering. Experienced in building end-to-end AI solutions—from data acquisition and model development to API deployment and production-ready machine learning systems. Dedicated to advancing next-generation AI through interdisciplinary research and engineering, with the goal of developing impactful technologies for healthcare, smart cities, and data-driven decision support.
          </p>
        </div>
      </section>

      {/* ── Research Interests ── */}
      <section className="bg-gray-100 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-3 mb-8">
          Research Interests
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {researchInterests.map((r, i) => (
            <div
              key={i}
              className="flex gap-4 p-4 border border-gray-300 bg-white transition-colors duration-200"
            >
              <div className="p-2 bg-blue-50 rounded h-fit">{r.icon}</div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  {r.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed text-justify">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
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

      <section className="bg-gray-100 border-b border-gray-100">
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
              <h2 className="text-3xl font-bold text-gray-800">
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
                className="inline-flex items-center gap-2 bg-gray-800 text-white hover:bg-gray-700 text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-md transition duration-300"
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

      {/* ── References ── */}
      <section className="bg-slate-50">
        <div className="w-full bg-gray-100 py-6">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-3 mb-6">
              References
            </h2>
            <div className="overflow-x-auto">
              <div className="min-w-[700px] bg-white rounded-lg shadow-sm grid grid-cols-3 divide-x divide-gray-200">
                {[
                  {
                    name: "M. Jahirul Islam, PhD., PEng.",
                    title: "Professor",
                    dept: "Department of CSE, SUST",
                    phone: "+8801770348185",
                    email: "jahir-cse@sust.edu",
                  },
                  {
                    name: "Dr. Ahsan Habib",
                    title: "Associate Professor",
                    dept: "Department of CSE, SUST",
                    phone: "+8801915796886",
                    email: "ahabib-iict@sust.edu",
                  },
                  {
                    name: "Md. Mushtaq Shahriyar Rafee",
                    title: "Assistant Professor & Head",
                    dept: "Department of DS, MU",
                    phone: "+8801785391622",
                    email: "rafee@metrouni.edu.bd",
                  },
                ].map((ref, i) => (
                  <div
                    key={i}
                    className="flex flex-col justify-center py-6 px-5 text-center"
                  >
                    <p className="text-sm font-bold text-[#1a3a4a] mb-1">
                      {ref.name}
                    </p>
                    <p className="text-xs font-semibold text-gray-500 mb-0.5">
                      {ref.title}
                    </p>
                    <p className="text-xs text-gray-400 mb-2">
                      {ref.dept}
                    </p>
                    <div className="text-xs text-gray-500 space-y-0.5">
                      <p>Phone: {ref.phone}</p>
                      <p>Email: {ref.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        id="contact"
        className="border-b border-gray-100 bg-gray-50/50 py-14 px-6"
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Interested in working together?
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Open to full-time roles, freelance projects, and research collaborations.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/pages/contact"
              className="px-5 py-2.5 rounded-md bg-gray-800 text-white font-bold text-sm hover:bg-gray-700 transition"
            >
              Contact Me
            </Link>
            <a
              href="https://www.linkedin.com/in/nakib33"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-md border border-gray-300 text-gray-600 font-medium text-sm hover:border-gray-400 hover:text-gray-800 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/nakib33"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-md border border-gray-300 text-gray-600 font-medium text-sm hover:border-gray-400 hover:text-gray-800 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
