"use client";

import { useState } from "react";
import {
  Shield,
  Trophy,
  Code2,
  Star,
  BrainCircuit,
  BookCheck,
} from "lucide-react";

const achievements = [
  {
    id: "01",
    icon: Shield,
    title: "Metropolitan University",
    subtitle: "Computer Science Student",
    description:
      "Building expertise in software engineering across three leadership roles — Student Secretary (Social Services Club), Office Secretary (CSE Society), and Organization Secretary (Photography Society). Also volunteered in digital safety awareness programs.",
    badge: "Extracurricular & Leadership",
    color: {
      bg: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      badgeBg: "bg-blue-100",
      badgeText: "text-blue-700",
      badgeBorder: "border-blue-200",
      accent: "bg-blue-500",
      numColor: "text-blue-300",
    },
  },
  {
    id: "02",
    icon: Trophy,
    title: "Competitive Programming",
    subtitle: "300+ Problems Solved",
    description:
      "Solved 300+ algorithmic problems across major platforms. Participated in 9 competitive programming contests, consistently demonstrating data structures proficiency and analytical thinking under pressure.",
    badge: "300+ Challenges Solved",
    color: {
      bg: "bg-violet-50",
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
      badgeBg: "bg-violet-100",
      badgeText: "text-violet-700",
      badgeBorder: "border-violet-200",
      accent: "bg-violet-500",
      numColor: "text-violet-300",
    },
  },
  {
    id: "03",
    icon: Code2,
    title: "Open Source",
    subtitle: "Community Contributor",
    description:
      "Active contributor across multiple repositories, demonstrating collaboration skills, code quality, and a consistent commitment to community-driven development.",
    badge: "Multiple Repositories",
    color: {
      bg: "bg-emerald-50",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      badgeBg: "bg-emerald-100",
      badgeText: "text-emerald-700",
      badgeBorder: "border-emerald-200",
      accent: "bg-emerald-500",
      numColor: "text-emerald-300",
    },
  },
  {
    id: "04",
    icon: Star,
    title: "Idea Sharing 2020",
    subtitle: "AI Innovation Challenge",
    description:
      "Awarded First Place in the Artificial Intelligence Innovation Challenge at Metropolitan University, organized by Hours of Code. Recognized for exceptional creativity and impactful contributions in AI.",
    badge: "First Position",
    color: {
      bg: "bg-amber-50",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      badgeBg: "bg-amber-100",
      badgeText: "text-amber-700",
      badgeBorder: "border-amber-200",
      accent: "bg-amber-500",
      numColor: "text-amber-300",
    },
  },
  {
    id: "05",
    icon: BrainCircuit,
    title: "Machine Learning",
    subtitle: "AI-Driven Applications",
    description:
      "Developed innovative machine learning projects including AI-driven applications that solve real-world problems. Work recognized and affiliated with DataSoft Bangladesh.",
    badge: "DataSoft Bangladesh",
    color: {
      bg: "bg-teal-50",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600",
      badgeBg: "bg-teal-100",
      badgeText: "text-teal-700",
      badgeBorder: "border-teal-200",
      accent: "bg-teal-500",
      numColor: "text-teal-300",
    },
  },
  {
    id: "06",
    icon: BookCheck,
    title: "Skills & Certifications",
    subtitle: "Multidisciplinary Technical",
    description:
      "Certified across data analytics, ML, Python, SQL, and BI — from Interactive Cares, HackerRank, Kaggle, Google Cloud, and Tutorials Point Bangladesh.",
    badge: "Multidisciplinary Skills",
    color: {
      bg: "bg-rose-50",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
      badgeBg: "bg-rose-100",
      badgeText: "text-rose-700",
      badgeBorder: "border-rose-200",
      accent: "bg-rose-500",
      numColor: "text-rose-300",
    },
  },
];

export default function KeyAchievements() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Section header */}
      <div className="flex items-end justify-between mb-8 sm:mb-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-tight">
            Key Achievements
          </h2>
        </div>
        <span className="text-sm text-gray-400 font-medium hidden sm:block">
          {achievements.length} highlights
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {achievements.map((item) => {
          const Icon = item.icon;
          const isHovered = hovered === item.id;

          return (
            <div
              key={item.id}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              className={`
                relative group rounded-2xl border border-gray-100 bg-white
                overflow-hidden cursor-default
                transition-all duration-300 ease-out
                ${isHovered ? "shadow-lg -translate-y-0.5 border-gray-200" : "shadow-sm"}
              `}
            >
              {/* Colored top accent bar */}
              <div className={`h-1 w-full ${item.color.accent}`} />

              <div className="p-5 sm:p-6 flex flex-col gap-4 h-full">
                {/* Top row: icon + number */}
                <div className="flex items-start justify-between">
                  <div
                    className={`w-10 h-10 rounded-xl ${item.color.iconBg} flex items-center justify-center`}
                  >
                    <Icon
                      className={`w-5 h-5 ${item.color.iconColor}`}
                      strokeWidth={1.8}
                    />
                  </div>
                  <span
                    className={`text-2xl font-bold tabular-nums ${item.color.numColor} select-none`}
                  >
                    {item.id}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-base font-semibold text-gray-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">{item.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  {item.description}
                </p>

                {/* Badge */}
                <div className="pt-1">
                  <span
                    className={`
                      inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                      text-xs font-medium border
                      ${item.color.badgeBg} ${item.color.badgeText} ${item.color.badgeBorder}
                    `}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${item.color.accent}`}
                    />
                    {item.badge}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}