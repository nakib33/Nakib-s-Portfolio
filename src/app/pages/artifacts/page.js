import { projects } from "@/data/projects";
import Project from "@/app/components/Artifact";

// Show these projects first
const priorityOrder = ['emotionvision-ai', 'medicalvision-ai', 'stock-trend-prediction-news-analysis', 'movie-recommendation-system'];
const sortedProjects = [
  ...priorityOrder.map((slug) => projects.find((p) => p.slug === slug)).filter(Boolean),
  ...projects.filter((p) => !priorityOrder.includes(p.slug)),
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-transparent via-indigo-50/20 to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <section>
          {/* Header */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
              Portfolio
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              Projects
            </h1>
            <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-md">
              A collection of projects I have built — from full-stack applications to machine learning systems.
            </p>
          </header>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
            {sortedProjects.map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectsPage;
