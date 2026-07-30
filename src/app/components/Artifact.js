import Link from 'next/link';
import { ArrowUpRight, Github, Folder } from 'lucide-react';

const Project = ({ project }) => {
    const truncateDescription = (text, maxWords = 60) => {
        if (!text) return '';
        const words = text.split(' ');
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        }
        return text;
    };

    return (
      <article className="group relative bg-white rounded-2xl border border-gray-200/70 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/60 hover:border-gray-300/80 flex flex-col">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50">
          {project.image ? (
            <>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:rotate-[0.5deg]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Folder className="w-14 h-14 text-gray-200" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 flex flex-col flex-1">
          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-2.5 group-hover:text-indigo-600 transition-colors duration-200">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
            {truncateDescription(project.description, 60)}
          </p>

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.technologies.slice(0, 4).map((tech, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 text-[11px] font-medium bg-indigo-50 text-indigo-600 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <Link
              href={project.link}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-gray-900/20 active:scale-[0.97]"
            >
              View Details
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-gray-500 hover:text-gray-900 text-sm font-medium rounded-xl transition-all duration-200 hover:bg-gray-50 active:scale-[0.97]"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </article>
    );
};

export default Project;
