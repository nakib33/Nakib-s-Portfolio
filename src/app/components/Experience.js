import React from 'react';
import { BookUser, Shield, Code } from 'lucide-react';

const Experience = () => {
    const experienceDetails = [
        {
            icon: <Code className="w-5 h-5 text-white" />,
            title: "Executive, Data Analyst",
            company: "Bionic, Bangladesh",
            type: "Full Time",
            location: "Sylhet, Bangladesh",
            period: "January 2025 – Running",
            responsibilities: [
                "Analyzed sales and operational data to define KPIs and deliver actionable insights for strategic decision-making.",
                "Built revenue forecasting models using predictive machine-learning techniques to support growth planning.",
                "Designed and maintained automated BI dashboards to monitor performance and improve reporting efficiency.",
                "Developed merchant segmentation and anomaly detection models to enhance engagement and operational effectiveness."
            ]
        },
        {
            icon: <BookUser className="w-5 h-5 text-white" />,
            title: "Web Developer and CRM Administrator",
            company: "Global Education Care",
            type: "Full Time",
            location: "Sylhet, Bangladesh",
            period: "July 2023 – December 2024",
            responsibilities: [
                "Design, build, and optimize responsive websites using modern web technologies.",
                "Manage, customize, and maintain CRM systems to enhance user experience and efficiency.",
                "Ensure data integrity, automate workflows, and generate reports for business insights.",
                "Provide support, troubleshoot issues, and train users on CRM and web applications."
            ]
        },
        {
            icon: <Shield className="w-5 h-5 text-white" />,
            title: "Machine Learning Engineer (Internship)",
            company: "DataSoft Systems Bangladesh Limited",
            type: "University Based",
            location: "Remote",
            period: "June 2023 – November 2024",
            responsibilities: [
                "Developed a Stock Trend Prediction model integrating news sentiment analysis with financial data for trend forecasting.",
                "Implemented NLP techniques (word embedding, sentiment classification) to analyze financial news impact on stock movements.",
                "Utilized Scikit-learn and ensemble learning models to enhance prediction accuracy, with insights visualized.",
                "Collaborated closely with project management team through weekly meetings to discuss project progress, challenges, mitigation strategies focusing continuous improvement."
            ]
        },
        {
            icon: <Shield className="w-5 h-5 text-white" />,
            title: "IT Instructor and IT Support Technician",
            company: "UCEP BANGLADESH",
            type: "Full Time",
            location: "Sylhet, Bangladesh",
            period: "June 2022 – April 2023",
            responsibilities: [
                "Diagnose and resolve hardware, software, and network issues.",
                "Instruct and mentor school & diploma students in IT-related subjects.",
                "Conduct training sessions on various IT skills for students.",
                "Equip students with ICT skills to build careers locally and abroad."
            ]
        },
    ];

    return (
        <div className="relative">
            {/* vertical timeline line */}
            <div className="absolute left-[23px] top-2 bottom-2 w-px bg-gray-200 hidden sm:block"></div>

            <div className="space-y-5">
                {experienceDetails.map((exp, index) => (
                    <div key={index} className="relative flex flex-col sm:flex-row gap-4 sm:gap-6">
                        {/* timeline dot */}
                        <div className="hidden sm:flex items-start justify-center w-12 shrink-0">
                            <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center ring-4 ring-gray-100 z-10">
                                {exp.icon}
                            </div>
                        </div>

                        {/* mobile icon */}
                        <div className="sm:hidden flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center">
                                {exp.icon}
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-gray-900">{exp.title}</h3>
                                <p className="text-sm text-gray-800 font-medium">{exp.company}</p>
                            </div>
                        </div>

                        {/* card */}
                        <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300">
                            <div className="hidden sm:block mb-3">
                                <h3 className="text-lg font-bold text-gray-900">{exp.title}</h3>
                                <p className="text-sm text-gray-800 font-medium">{exp.company}</p>
                            </div>
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500 mb-4">
                                <span className="inline-flex items-center px-2.5 py-0.5 bg-gray-100 text-gray-700 rounded-full font-medium">{exp.period}</span>
                                <span>{exp.type}</span>
                                <span className="text-gray-300">·</span>
                                <span>{exp.location}</span>
                            </div>
                            <ul className="text-sm text-gray-600 space-y-2">
                                {exp.responsibilities.map((responsibility, idx) => (
                                    <li key={idx} className="leading-relaxed flex gap-2">
                                        <span className="text-gray-300 mt-0.5">•</span>
                                        <span>{responsibility}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
