import { Link } from "react-router-dom";

function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
          My Projects
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Here are some of the projects I've worked on.
        </p>

        <div className="flex justify-center space-x-4">
          <Link
            to="/Contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition"
          >
            Contact Me
          </Link>
          <Link
            to="/"
            className="px-6 py-3 border border-gray-400 rounded-2xl text-gray-700 hover:bg-gray-200 transition"
          >
            Home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ProjectsPage;
