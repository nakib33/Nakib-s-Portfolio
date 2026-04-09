"use client";

import { useState } from "react";
import Image from "next/image";

const certifications = [
  {
    id: 1,
    title: "Data Analytics and BI Career Path",
    shortDesc:
      "Comprehensive data analytics and business intelligence training.",
    fullDesc:
      "Completed the Data Analytics and BI Career Path, covering data visualization, reporting, dashboards, KPIs, and BI workflows.",
    image: "/certificates/cert1.jpg",
  },
  {
    id: 2,
    title: "Data Science & Machine Learning Career Path",
    shortDesc: "Structured learning in ML, AI, and data science concepts.",
    fullDesc:
      "Completed the Data Science & Machine Learning Career Path, including machine learning, data preprocessing, model evaluation, and real-world AI applications.",
    image: "/certificates/cert2.jpg",
  },
  {
    id: 3,
    title: "Data Analytics – Tutorials Point Bangladesh",
    shortDesc: "Fundamentals of data analysis and visualization techniques.",
    fullDesc:
      "Completed Data Analytics training with Tutorials Point Bangladesh, focusing on data cleaning, visualization, and basic analytics workflows.",
    image: "/certificates/cert3.jpg",
  },
  {
    id: 4,
    title: "Introduction to Applied Data Science with Python",
    shortDesc: "Python-based applied data science training.",
    fullDesc:
      "Learned Python for data analysis, applied data science methods, and real-world dataset handling in this introductory course.",
    image: "/certificates/cert4.jpg",
  },
  {
    id: 5,
    title: "Exploring Data Transformation with Google Cloud",
    shortDesc: "Data transformation and processing on cloud platforms.",
    fullDesc:
      "Covered cloud-based data processing, ETL pipelines, and transformations using Google Cloud tools and services.",
    image: "/certificates/cert5.jpg",
  },
  {
    id: 6,
    title: "Python Beginner to Advanced (HackerRank)",
    shortDesc: "Comprehensive Python programming from basics to advanced.",
    fullDesc:
      "Completed Python programming challenges on HackerRank, covering beginner to advanced topics, OOP, scripting, and problem-solving.",
    image: "/certificates/cert6.jpg",
  },
  {
    id: 7,
    title: "SQL Beginner to Advanced (HackerRank)",
    shortDesc: "Advanced SQL querying and database management.",
    fullDesc:
      "Mastered SQL from basics to advanced queries on HackerRank, including joins, indexing, optimization, and database design concepts.",
    image: "/certificates/cert7.jpg",
  },
  {
    id: 8,
    title: "Pandas Participation (Kaggle)",
    shortDesc: "Hands-on practice with Python Pandas for data analysis.",
    fullDesc:
      "Participated in Kaggle exercises using Pandas for data cleaning, analysis, and manipulation of real-world datasets.",
    image: "/certificates/cert8.png",
  },
];

export default function Certifications() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <header className="mb-6">
        <h1 className="text-3xl font-light text-gray-900 border-b border-gray-200 pb-3">
          Certifications
        </h1>
      </header>

      {/* Mobile Scroll */}
      <div className="flex sm:hidden overflow-x-auto space-x-4 py-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="flex-shrink-0 w-64 bg-white rounded-xl shadow-md hover:shadow-lg transition p-4"
          >
            <div className="relative w-full h-48 rounded-lg overflow-hidden">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4">{cert.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{cert.shortDesc}</p>
            <button
              onClick={() => setSelected(cert)}
              className="mt-4 px-5 py-2 bg-orange-500 text-white text-sm font-semibold rounded-md hover:bg-orange-600 transition"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Desktop Grid */}
      <div className="hidden sm:grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4"
          >
            {/* Fixed-size thumbnail box */}
            <div className="relative w-full h-48 rounded-lg overflow-hidden">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-lg font-semibold mt-4">{cert.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{cert.shortDesc}</p>

            <button
              onClick={() => setSelected(cert)}
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
            <p className="text-gray-600 text-sm mb-6">{selected.fullDesc}</p>

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
