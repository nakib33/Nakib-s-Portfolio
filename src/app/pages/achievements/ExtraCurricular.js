"use client";

import { useState } from "react";
import Image from "next/image";

const experience = [
  {
    id: 1,
    title: "Data Strategist",
    company: "Bionics Bangladesh",
    period: "January 2025 - Present",
    description:
      "As a Data Strategist at Bionics Bangladesh, I analyze sales and operational data to define KPIs and deliver actionable insights for strategic decision-making. I build revenue forecasting models using predictive machine-learning techniques to support growth planning, design and maintain automated BI dashboards to monitor performance and improve reporting efficiency, and develop merchant segmentation and anomaly detection models to enhance engagement and operational effectiveness.",
    image: "/Experience/exp1.jpg",
  },
  {
    id: 2,
    title: "Web Developer and CRM Administrator",
    company: "Global Education Care",
    period: "January 2024 – December 2024",
    description:
      "In my role as Web Developer and CRM Administrator at Global Education Care, I designed, built, and optimized responsive websites using modern web technologies. I managed, customized, and maintained CRM systems to enhance user experience and efficiency, ensured data integrity, automated workflows, and generated reports for business insights. Additionally, I provided support, troubleshooted issues, and trained users on CRM and web applications.",
    image: "/Experience/exp2.jpg",
  },
  {
    id: 3,
    title:
      "Machine Learning Engineer",
    company: "DataSoft Systems Bangladesh Limited",
    period: "June 2023 – January 2025",
    description:
      "Software Engineer at DataSoft Systems Bangladesh Limited, I developed a Stock Trend Prediction model integrating news sentiment analysis with financial data for trend forecasting. I implemented NLP techniques such as word embedding and sentiment classification to analyze financial news impact on stock movements, utilized Scikit-learn and ensemble learning models to enhance prediction accuracy with visualized insights, and collaborated closely with the project management team through weekly meetings to discuss progress, challenges, and continuous improvement strategies.",
    image: "/Experience/exp3.jpg",
  },
  {
    id: 4,
    title: "IT Instructor and IT Support Technician",
    company: "UCEP BANGLADESH",
    period: "June 2022 – July 2023",
    description:
      "At UCEP BANGLADESH, I diagnosed and resolved hardware, software, and network issues while instructing and mentoring school and diploma students in IT-related subjects. I conducted training sessions on various IT skills and equipped students with ICT capabilities to build successful careers locally and abroad.",
    image: "/Experience/exp4.jpg",
  },
  {
    id: 5,
    title: "Student Secretary",
    company: "Metropolitan University Social Services Club",
    period: "2020 – 2023",
    description:
      "As Student Secretary of the Metropolitan University Social Services Club, I organized student activities, coordinated events, and supported club management to foster community engagement and social initiatives.",
    image: "/Experience/exp5.jpg",
  },
  {
    id: 6,
    title: "Office Secretary",
    company: "CSE Society, Metropolitan University",
    period: "2020 – 2021",
    description:
      "During my tenure as Office Secretary at the CSE Society, I managed administrative tasks, coordinated events, and facilitated smooth communication among society members.",
    image: "/Experience/exp6.jpg",
  },
  {
    id: 7,
    title: "Organization Secretary",
    company: "Metropolitan University Photography Society",
    period: "2019 – 2023",
    description:
      "Serving as Organization Secretary of the Metropolitan University Photography Society, I coordinated photography events, managed society communications, and supported creative projects for students and members.",
    image: "/Experience/exp7.jpg",
  },
  {
    id: 8,
    title: "Volunteer",
    company: "TREE PLANTATION INITIATIVE 2023",
    period: "2023",
    description:
      "I participated as a volunteer in the TREE PLANTATION INITIATIVE 2023 organized by the MU Social Services Club, contributing to environmental sustainability efforts and community awareness on tree planting.",
    image: "/Experience/exp8.jpg",
  },
  {
    id: 9,
    title: "Volunteer",
    company: "Sexual Harassment Awareness Program",
    period: "2023",
    description:
      "As a volunteer for the program on Sexual Harassment on Digital Platforms organized by Metropolitan University, I assisted in raising awareness on online safety, social networking risks, and strategies to prevent harassment on digital platforms.",
    image: "/Experience/exp9.jpg",
  },
];

export default function Extracurricular() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <header className="mb-6">
        <h1 className="text-3xl font-light text-gray-900 border-b border-gray-200 pb-3">
          Job & Extra Curricular Experiences
        </h1>
      </header>

      {/* Mobile Scroll */}
      <div className="flex sm:hidden overflow-x-auto space-x-4 py-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {experience.map((exp) => (
          <div
            key={exp.id}
            className="flex-shrink-0 w-64 bg-white rounded-xl shadow-md hover:shadow-lg transition p-4"
          >
            <div className="relative w-full h-48 rounded-lg overflow-hidden">
              <Image
                src={exp.image}
                alt={exp.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4">{exp.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{exp.company}</p>
            <p className="text-gray-500 text-xs mt-1">{exp.period}</p>
            <button
              onClick={() => setSelected(exp)}
              className="mt-4 px-5 py-2 bg-orange-500 text-white text-sm font-semibold rounded-md hover:bg-orange-600 transition"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Desktop Grid */}
      <div className="hidden sm:grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {experience.map((exp) => (
          <div
            key={exp.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4"
          >
            <div className="relative w-full h-48 rounded-lg overflow-hidden">
              <Image
                src={exp.image}
                alt={exp.title}
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-lg font-semibold mt-4">{exp.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{exp.company}</p>
            <p className="text-gray-500 text-xs mt-1">{exp.period}</p>

            <button
              onClick={() => setSelected(exp)}
              className="mt-4 px-5 py-2 bg-orange-500 text-white text-sm font-semibold rounded-md hover:bg-orange-600 transition"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Modal / Pop-out */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4 overflow-auto">
          <div className="bg-white rounded-xl max-w-3xl w-full p-6 relative">
            {/* Original size image */}
            <div className="relative w-full h-auto mb-4">
              <Image
                src={selected.image}
                alt={selected.title}
                width={800}
                height={600}
                className="object-contain mx-auto"
              />
            </div>

            <h3 className="text-xl font-bold mb-2">{selected.title}</h3>
            <p className="text-gray-600 text-sm mb-6">{selected.description}</p>

            {/* Close Button at the bottom */}
            <div className="flex justify-end">
              <button
                onClick={() => setSelected(null)}
                className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
