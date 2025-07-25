import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
          Hi, I'm Matheus
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          A passionate developer focused on building web apps and OS-focused
          software.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 border border-gray-400 rounded-2xl text-gray-700 hover:bg-gray-200 transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
