import React from 'react';
import { BookUser, Shield, Code } from 'lucide-react';

const Experience = () => {
    const experienceDetails = [
        {
            icon: <Code className="w-6 h-6 text-blue-600" />,
            title: "Executive, Data Analyst",
            company: "Bionics Bangladesh",
            type: "Full Time",
            location: "Sylhet, Bangladesh",
            period: "January 2025 – Running",
            responsibilities: [
                "Analyzed sales and operational data to define KPIs and deliver actionable insights for strategic decision-making.",
                "Built revenue forecasting models using predictive machine-learning techniques to support growth planning. ",
                "Designed and maintained automated BI dashboards to monitor performance and improve reporting efficiency. ",
                "Developed merchant segmentation and anomaly detection models to enhance engagement and operational effectiveness."
            ]
        },
        {
            icon: <BookUser className="w-6 h-6 text-blue-600" />,
            title: "Web Developer and CRM Administrator",
            company: "AnTech Innovation & Global Education Care",
            type: "Full Time",
            location: "Sylhet, Bangladesh",
            period: "July 2023 – December 2024",
            responsibilities: [
                "Design, build, and optimize responsive websites using modern web technologies.",
                "Manage, customize, and maintain CRM systems to enhance user experience and efficiency.",
                "Ensure data integrity, automate workflows, and generate reports for business insights.  ",
                "Provide support, troubleshoot issues, and train users on CRM and web applications."
            ]
        },
        {
            icon: <Shield className="w-6 h-6 text-blue-600" />,
            title: "Machine Learning Engineer",
            company: "DataSoft Systems Bangladesh Limited",
            type: "Casual",
            location: "Remote",
            period: "June 2023 – November 2024",
            responsibilities: [
                "Developed a Stock Trend Prediction model integrating news sentiment analysis with financial data for trend forecasting. ",
                "Implemented NLP techniques (word embedding, sentiment classification) to analyze financial news impact on stock movements. ",
                "Utilized Scikit-learn and ensemble learning models to enhance prediction accuracy, with insights visualized.",
                "Collaborated closely with project management team through weekly meetings to discuss project progress, challenges, mitigation strategies focusing continuous improvement."
            ]
        },
        {
            icon: <Shield className="w-6 h-6 text-blue-600" />,
            title: "IT Instructor and IT Support Technician",
            company: "UCEP BANGLADESH",
            type: "Full Time",
            location: "Sylhet, Bangladesh",
            period: "June 2022 – April 2023",
            responsibilities: [
                "Diagnose and resolve hardware, software, and network issues.",
                "Instruct and mentor school & diploma students in IT-related subjects.",
                "Conduct training sessions on various IT skills for students.",
                "Equip students with ICT skills to build careers locally and abroad "
            ]
        },
    ];

    return (
        <section id="experience" className="max-w-5xl mx-auto px-6 py-12">
            <div className="bg-white">
                <header className="mb-6">
                    <h2 className="text-2xl font-light text-gray-900 border-b border-gray-200 pb-3">
                        Professional Experience
                    </h2>
                </header>

                <div className="space-y-8">
                    {experienceDetails.map((exp, index) => (
                        <article key={index} className="bg-white border-b border-gray-100 last:border-0 pb-8 last:pb-0">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-2 bg-blue-50 rounded">
                                    {exp.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-medium text-gray-900 mb-1">
                                        {exp.title}
                                    </h3>
                                    <p className="text-blue-600 font-medium mb-1">{exp.company}</p>
                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500 mb-4">
                                        <span>{exp.period}</span>
                                        <span className="text-gray-300">·</span>
                                        <span>{exp.type}</span>
                                        <span className="text-gray-300">·</span>
                                        <span>{exp.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="prose max-w-none">
                                <ul className="text-gray-700 space-y-2">
                                    {exp.responsibilities.map((responsibility, idx) => (
                                        <li key={idx} className="leading-relaxed">
                                            {responsibility}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
