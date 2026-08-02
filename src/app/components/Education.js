import React from 'react';
import { BookOpen } from 'lucide-react';

const Education = () => {
    const educationDetails = [
        {
            logo: "/image/sust.png",
            degree: "Masters in Information Technology",
            institution: "Shahjalal University of Science and Technology (SUST)",
            period: "2023 – 2025",
            gpa: "3.88/4.00",
            coursework: "Machine Learning, Artificial Intelligence, Model Development, Python Algorithms, Data Science, Deep Learning, Database Systems, Information Systems.",
            projectLabel: "Industry-Sponsored Internship & Final Year Project:",
            project: "Stock Trend Prediction Using Bangla News Analysis during an M.Sc. industry internship at DataSoft Systems Bangladesh Limited, one of Bangladesh's leading technology companies.",
            icon: <BookOpen className="w-5 h-5 text-white" />
        },
        {
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThojYZr_EOQlsW3U_UlbcConqVxaxyzsTpvw&s",
            degree: "Bachelor of Science in Computer Science and Engineering",
            institution: "Metropolitan University",
            period: "2018 – 2022",
            gpa: "3.69/4.00",
            coursework: "Data Structures, Algorithms, Object-Oriented Programming, Machine Learning, Artificial Intelligence, Bioinformatics Computing, Discrete Mathematics.",
            projectLabel: "Final Year Project:",
            project: "AI-Based E-Commerce Platform propagated via Django and React with a machine learning regression model for real-time laptop price prediction.",
            icon: <BookOpen className="w-5 h-5 text-white" />
        }
    ];

    return (
        <div className="grid md:grid-cols-2 gap-6">
            {educationDetails.map((edu, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm p-7 hover:shadow-lg hover:border-gray-300 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-5">
                        <div className="w-11 h-11 rounded-lg bg-gray-800 text-white flex items-center justify-center shrink-0">
                            {edu.icon}
                        </div>
                        <img
                            src={edu.logo}
                            alt={`${edu.institution} logo`}
                            className="h-10 w-16 object-contain"
                        />
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {edu.degree}
                    </h3>
                    <p className="text-sm text-gray-800 font-medium mb-3">
                        {edu.institution}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 bg-gray-100 text-gray-700 rounded-full font-medium">{edu.period}</span>
                        <span className="inline-flex items-center px-2.5 py-0.5 bg-gray-100 text-gray-700 rounded-full font-medium">CGPA: {edu.gpa}</span>
                    </div>

                    <div className="text-sm text-gray-600 leading-relaxed text-justify space-y-3">
                        <p>{edu.coursework}</p>
                        <p>
                            <span className="font-semibold text-gray-800">{edu.projectLabel}</span> {edu.project}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Education;