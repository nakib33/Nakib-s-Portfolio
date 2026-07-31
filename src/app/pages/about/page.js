import Profile from "@/app/components/Profile";
import Experience from "@/app/components/Experience";
import Education from "@/app/components/Education";

import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Eye,
  FlaskConical,
  Globe,
  Mail,
  MapPin,
  Phone,
  GraduationCap,
  Award,
} from "lucide-react";

const skillsData = {
  Programming: ["Python", "JavaScript", "TypeScript", "Java", "C++", "C"],
  "Machine Learning": [
    "Scikit-learn",
    "XGBoost",
    "LightGBM",
    "TensorFlow",
    "Pandas",
    "NumPy",
    "SHAP",
  ],
  "Deep Learning": [
    "PyTorch",
    "CNNs",
    "Vision Transformers",
    "Transfer Learning",
    "Multimodal Learning",
    "MambaOut",
  ],
  "Research Methods": [
    "Computer Vision",
    "NLP",
    "Explainable AI",
    "Imbalanced Learning",
    "Feature Engineering",
    "Cross-Validation",
    "Temporal Validation",
    "Spatial Analysis",
  ],
  "Medical AI": [
    "Medical Imaging",
    "Clinical Decision Support",
    "Risk Stratification",
    "Uncertainty Quantification",
  ],
  "Web & Mobile": [
    "Django",
    "FastAPI",
    "React.js",
    "Next.js",
    "React Native",
    "Node.js",
  ],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
  Tools: ["Git", "GitHub", "Docker", "Jupyter Notebook", "REST APIs"],
};

const researchInterests = [
  {
    icon: <BrainCircuit className="w-5 h-5 text-white" />,
    title: "Artificial Intelligence & Machine Learning",
    desc: "AI, ML, Deep Learning, Foundation Models, LLMs, NLP, Transformers, ViTs, Multimodal Learning, Reinforcement Learning, Representation Learning, and Self-Supervised Learning.",
  },
  {
    icon: <Eye className="w-5 h-5 text-white" />,
    title: "Computer Vision & Biomedical AI",
    desc: "Computer Vision, Medical Imaging, Biomedical Image Analysis, Bioinformatics, Healthcare AI, Precision Medicine, Clinical Decision Support, Medical Image Segmentation & Classification, Disease Risk Prediction.",
  },
  {
    icon: <FlaskConical className="w-5 h-5 text-white" />,
    title: "Explainable AI & Intelligent Data Analytics",
    desc: "XAI, Trustworthy AI, Responsible AI, Predictive Analytics, Time Series Forecasting, Ensemble Learning, Graph ML, Anomaly & Fraud Detection, Decision Intelligence, Uncertainty Estimation.",
  },
  {
    icon: <Globe className="w-5 h-5 text-white" />,
    title: "Geospatial AI & Intelligent Systems",
    desc: "Geospatial AI, Urban Analytics, Spatial Data Science, GIS & Remote Sensing, Intelligent Transportation, Human Mobility Analytics, MLOps, AI Systems Engineering, Edge & Cloud AI.",
  },
];

const quickFacts = [
  { icon: <MapPin className="w-4 h-4" />, label: "Location", value: "Sylhet, Bangladesh" },
  { icon: <Mail className="w-4 h-4" />, label: "Email", value: "nakibuddin33@gmail.com" },
  { icon: <Phone className="w-4 h-4" />, label: "Phone", value: "+880 1646-819354" },
  { icon: <GraduationCap className="w-4 h-4" />, label: "Degree", value: "M.Sc. Information Technology (SUST)" },
  { icon: <Award className="w-4 h-4" />, label: "Research", value: "7+ peer-reviewed publications" },
];

const references = [
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
];

function SectionHeader({ number, eyebrow, title }) {
  return (
    <div className="mb-7">
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm font-bold text-gray-800">{number}</span>
        <span className="h-px w-8 bg-gray-300"></span>
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500">{eyebrow}</span>
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mt-3">{title}</h2>
      <div className="w-12 h-[3px] bg-gray-800 rounded-full mt-3"></div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <Profile />

      {/* ── 01 · About ── */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 py-12">
        <SectionHeader number="01" eyebrow="Profile" title="About Me" />
        <div className="grid lg:grid-cols-[320px_1fr] gap-8">
          {/* Quick facts sidebar */}
          <aside className="lg:sticky lg:top-24 self-start">
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-800 px-5 py-4">
                <p className="text-xs font-semibold tracking-widest uppercase text-gray-300">Quick Facts</p>
              </div>
              <div className="divide-y divide-gray-100">
                {quickFacts.map((f, i) => (
                  <div key={i} className="flex items-start gap-3 px-4 py-3 sm:px-5 sm:py-3.5">
                    <span className="text-gray-400 shrink-0 mt-0.5">{f.icon}</span>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-widest text-gray-400">{f.label}</p>
                      <p className="text-sm font-medium text-gray-800 break-words">{f.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-gray-50">
                <Link
                  href="/pages/contact"
                  className="flex items-center justify-center gap-2 bg-gray-800 text-white text-sm font-medium py-2.5 rounded-lg hover:bg-gray-700 transition w-full"
                >
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Narrative */}
          <div className="space-y-5 text-gray-700 leading-relaxed text-base text-left sm:text-justify">
            <p>
              AI Researcher and Machine Learning Engineer with 3+ years of experience developing intelligent, data-driven systems across healthcare, bioinformatics, geospatial analytics, urban computing, and predictive modeling. Earned a B.Sc. in Computer Science &amp; Engineering (CGPA: 3.69/4.00) from Metropolitan University, Bangladesh, and an M.Sc. in Information Technology (CGPA: 3.88/4.00) from Shahjalal University of Science and Technology (SUST), Bangladesh. Passionate about advancing trustworthy, scalable, and interpretable AI that bridges fundamental research with real-world deployment.
            </p>
            <p>
              Author of multiple peer-reviewed research publications in internationally recognized journals, with contributions spanning Medical Imaging, Explainable Artificial Intelligence (XAI), Bioinformatics, Computer Vision, Natural Language Processing (NLP), Healthcare AI, Recruitment Fraud Detection, Housing Affordability Forecasting, Geospatial AI, Urban Analytics, and Ensemble Machine Learning. My research focuses on designing robust AI models that improve decision-making, enhance predictive performance, and deliver measurable societal impact through responsible and explainable artificial intelligence.
            </p>
            <div className="rounded-xl bg-gray-50 border border-gray-100 p-6">
              <p className="text-gray-700 leading-relaxed text-left sm:text-justify">
                Proficient in Python, PyTorch, scikit-learn, SQL, FastAPI, React, Next.js, Docker, AWS, Power BI, Git, and Linux, with expertise in Deep Learning, Computer Vision, Vision Transformers (ViTs), Large Language Models (LLMs), Multimodal AI, Explainable AI (XAI), Predictive Analytics, Time Series Forecasting, MLOps, and AI Systems Engineering. Experienced in building end-to-end AI solutions—from data acquisition and model development to API deployment and production-ready machine learning systems. Dedicated to advancing next-generation AI through interdisciplinary research and engineering, with the goal of developing impactful technologies for healthcare, smart cities, and data-driven decision support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 · Research Interests ── */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <SectionHeader number="02" eyebrow="Focus Areas" title="Research Interests" />
          <div className="grid sm:grid-cols-2 gap-4">
            {researchInterests.map((r, i) => (
              <div
                key={i}
                className="group flex gap-5 p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="p-3 bg-gray-800 rounded-lg h-fit group-hover:bg-gray-700 transition-colors">
                  {r.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1.5">{r.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 · Experience ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <SectionHeader number="03" eyebrow="Career" title="Professional Experience" />
        <Experience />
      </section>

      {/* ── 04 · Education ── */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <SectionHeader number="04" eyebrow="Academic" title="Educational Background" />
          <Education />
        </div>
      </section>

      {/* ── 05 · Technical Skills ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <SectionHeader number="05" eyebrow="Capabilities" title="Technical Skills" />
        <div className="grid sm:grid-cols-2 gap-4">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="rounded-xl border border-gray-200 bg-white p-5 hover:border-gray-300 hover:shadow-sm transition-all duration-200">
              <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide mb-3 border-b border-gray-100 pb-2.5">{category}</h3>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs bg-gray-100 text-gray-700 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 06 · Research ── */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-sm font-bold text-gray-800">06</span>
                <span className="h-px w-8 bg-gray-300"></span>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500">Research</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">7 Peer-Reviewed Publications</h2>
              <p className="text-sm text-gray-500 mt-2">Springer Nature · Elsevier · Frontiers · IJCA</p>
            </div>
            <Link
              href="/pages/publications"
              className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all duration-200 self-start md:self-auto"
            >
              View all papers <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 07 · References ── */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <SectionHeader number="07" eyebrow="Network" title="References" />
          <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0">
            {references.map((ref, i) => (
              <div key={i} className="min-w-[280px] sm:min-w-0 flex-1 snap-start bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-14 h-14 mx-auto rounded-full bg-gray-800 text-white flex items-center justify-center font-bold text-lg mb-4">
                  {ref.name.split(" ").filter((w) => w[0] && w[0] === w[0].toUpperCase()).slice(0, 2).map((w) => w[0]).join("")}
                </div>
                <p className="text-sm font-bold text-gray-900 mb-1">{ref.name}</p>
                <p className="text-xs font-semibold text-gray-500 mb-0.5">{ref.title}</p>
                <p className="text-xs text-gray-400 mb-3">{ref.dept}</p>
                <div className="text-xs text-gray-500 space-y-0.5">
                  <p>Phone: {ref.phone}</p>
                  <p>Email: {ref.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-2">Let&apos;s Connect</p>
            <h2 className="text-2xl font-bold text-white mb-2">Interested in working together?</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Open to full-time roles, freelance projects, and research collaborations.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/pages/contact" className="px-5 py-2.5 rounded-lg bg-white text-gray-900 font-bold text-sm hover:bg-gray-200 transition">
              Contact Me
            </Link>
            <a href="https://www.linkedin.com/in/nakib33" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg border border-white/40 text-white font-medium text-sm hover:bg-white/10 transition">
              LinkedIn
            </a>
            <a href="https://github.com/nakib33" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg border border-white/40 text-white font-medium text-sm hover:bg-white/10 transition">
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
