import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

const Education = () => {
    const educationDetails = [
        {
            logo: "/image/sust.png",
            degree: "Masters in Information Technology",
            institution: "Shahjalal University of Science and Technology (SUST)",
            period: "2023 – 2025",
            gpa: "3.88",
            description: "Advanced coursework and research in information technology, focusing on machine learning, artificial intelligence, and data-driven solutions for real-world challenges.",
            icon: <BookOpen className="w-6 h-6 text-[#1a3a4a]" />
        },
        {
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThojYZr_EOQlsW3U_UlbcConqVxaxyzsTpvw&s",
            degree: "Bachelor of Science in Computer Science and Engineering",
            institution: "Metropolitan University",
            period: "2018 – 2022",
            gpa: "3.69",
            description: "Specialized in backend development and software engineering, with a focus on programming languages, algorithms, data structures, and database management.",
            icon: <BookOpen className="w-6 h-6 text-[#1a3a4a]" />
        }
    ];

    return (
        <section id="education" className="bg-gray-100">
            <div className="max-w-5xl mx-auto px-6 py-12">
            <div className="bg-white rounded-md p-10">
                <header className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-3 mb-6">
                        Educational Background
                    </h2>
                </header>

                <div>
                    {/* Masters Entry */}
                    <div className="flex items-start gap-4 mb-3">
                        <div className="p-2 bg-blue-50 rounded">
                            {educationDetails[0].icon}
                        </div>
                        <div className="flex-1">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <h3 className="text-xl font-medium text-gray-900 mb-1">
                                        {educationDetails[0].degree}
                                    </h3>
                                    <p className="text-[#1a3a4a] font-medium mb-1">{educationDetails[0].institution}</p>
                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500">
                                        <span>{educationDetails[0].period}</span>
                                        <span className="text-gray-300">·</span>
                                        <span>GPA: {educationDetails[0].gpa}</span>
                                    </div>
                                </div>
                                <img
                                    src={educationDetails[0].logo}
                                    alt={`${educationDetails[0].institution} logo`}
                                    className="w-16 h-10 object-contain flex-shrink-0"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="prose max-w-none pl-14 mb-12">
                        <p className="text-gray-700 leading-relaxed">
                            {educationDetails[0].description}
                        </p>
                    </div>

                    {/* BSc Entry */}
                    <div className="flex items-start gap-4 mb-3">
                        <div className="p-2 bg-blue-50 rounded">
                            {educationDetails[1].icon}
                        </div>
                        <div className="flex-1">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <h3 className="text-xl font-medium text-gray-900 mb-1">
                                        {educationDetails[1].degree}
                                    </h3>
                                    <p className="text-[#1a3a4a] font-medium mb-1">{educationDetails[1].institution}</p>
                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500">
                                        <span>{educationDetails[1].period}</span>
                                        <span className="text-gray-300">·</span>
                                        <span>GPA: {educationDetails[1].gpa}</span>
                                    </div>
                                </div>
                                <img
                                    src={educationDetails[1].logo}
                                    alt={`${educationDetails[1].institution} logo`}
                                    className="w-16 h-10 object-contain flex-shrink-0"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="prose max-w-none pl-14">
                        <p className="text-gray-700 leading-relaxed">
                            {educationDetails[1].description}
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Education;
