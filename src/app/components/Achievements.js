import React from 'react';
import { Trophy, University, Code, Star, BookCheck } from 'lucide-react';

const Achievements = () => {
    const achievements = [
        {
            icon: <Trophy className="w-6 h-6 text-blue-600" />,
            title: "Competitive Programming",
            description: "Solved 300+ algorithmic problems across multiple platforms, demonstrating strong proficiency in data structures and problem-solving. Actively participated in 9 competitive programming contests, showcasing consistency, analytical thinking, and performance under pressure.",
            highlight: "300+ Coding Challenges Solved"
        },
        {
            icon: <University className="w-6 h-6 text-blue-600" />,
            title: "Metropolitan University",
            description: "Computer Science student at Indiana Metropolitan University, pursuing advanced knowledge in software engineering and technology.",
            highlight: "Dedicated Computer Science Student"
        },
        {
            icon: <Code className="w-6 h-6 text-blue-600" />,
            title: "Open Source Contributions",
            description: "Active contributor to open-source initiatives, demonstrating strong collaboration skills, code quality, and a consistent commitment to community-driven development.",
            highlight: "Multiple Repository Contributions"
        },
        {
            icon: <Trophy className="w-6 h-6 text-blue-600" />,
            title: "Idea Sharing 2020",
            description: "Awarded First Place in the Artificial Intelligence Innovation Challenge (Idea Sharing 2020) at Metropolitan University, organized by Hours of Code. Recognized for exceptional creativity, innovative thinking, and impactful contributions in the field of Artificial Intelligence.",
            highlight: "First Position"
        },
        {
            icon: <Star className="w-6 h-6 text-blue-600" />,
            title: "Machine Learning Projects",
            description: "Developed innovative machine learning projects, including AI-driven applications that solve real-world problems.",
            highlight: "DataSoft Bangladesh"
        },
        {
            icon: <BookCheck className="w-6 h-6 text-blue-600" />,
            title: "Technical Skills",
            description: "Continuously expanding technical expertise through advanced programming, machine learning, and software development projects.",
            highlight: "Multidisciplinary Technical Skills"
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                            Achievements
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                {/* Achievements Row */}
                <div className="flex flex-nowrap overflow-x-auto space-x-6 pb-6">
                    {achievements.map((achievement, index) => (
                        <div 
                            key={index}
                            className="flex-shrink-0 w-96 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="p-3 bg-blue-50 rounded-lg">
                                    {achievement.icon}
                                </div>
                                <h3 className="text-xl font-bold text-blue-800">
                                    {achievement.title}
                                </h3>
                            </div>
                            <p className="text-gray-700 mb-4">
                                {achievement.description}
                            </p>
                            <div className="bg-blue-50 p-3 rounded-lg">
                                <span className="text-blue-800 font-semibold">
                                    {achievement.highlight}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;