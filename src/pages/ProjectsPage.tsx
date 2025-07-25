import { Link } from "react-router-dom";
import redImage from "../assets/red.jpeg";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      {/* Background Header */}
      <div className="relative w-full max-w-4xl h-96 mb-10 rounded-2xl overflow-hidden flex items-center justify-center">
        <img
          src={redImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-left brightness-75"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            My Projects
          </h1>
          <p className="text-lg md:text-xl text-white">
            Here are some of the projects I've worked on.
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center space-x-4 my-10">
        <Link
          to="/contact"
          className="px-6 py-3 bg-rose-600 text-white rounded-2xl shadow hover:bg-rose-900 transition"
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

      {/* Project Cards */}
      <div className="text-center max-w-4xl w-full">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Anki My */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-left hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Anki My</h2>
            <p className="text-gray-600 mb-4">
              A flashcard app using spaced repetition. Built with React & Rust.
            </p>
            <a
              href="https://github.com/Nubzzin/anki-my-frontend"
              target="_blank"
              className="text-blue-600 hover:underline font-medium"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </div>

          {/* JSON Editor */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-left hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              JSON Editor
            </h2>
            <p className="text-gray-600 mb-4">
              A lightweight JSON editor made entirely with Rust.
            </p>
            <a
              href="https://github.com/Nubzzin/JSON-editor"
              target="_blank"
              className="text-blue-600 hover:underline font-medium"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </div>

          {/* Game of Life */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-left hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Game of Life
            </h2>
            <p className="text-gray-600 mb-4">
              A Raylib-based simulation of Conway’s Game of Life in C++.
            </p>
            <a
              href="https://github.com/Nubzzin/Game-of-Life"
              target="_blank"
              className="text-blue-600 hover:underline font-medium"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </div>

          {/* Movie Finder React */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-left hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Movie Finder React
            </h2>
            <p className="text-gray-600 mb-4">
              React app that allows users to search and browse movies using a
              movie API.
            </p>
            <a
              href="https://github.com/Nubzzin/Movie-finder-react"
              target="_blank"
              className="text-blue-600 hover:underline font-medium"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </div>

          {/* compiler-rust-br */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-left hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Compiler in Rust
            </h2>
            <p className="text-gray-600 mb-4">
              Rust compiler using assembly as intermediate language.
            </p>
            <a
              href="https://github.com/Nubzzin/compiler-rust-br"
              target="_blank"
              className="text-blue-600 hover:underline font-medium"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </div>

          {/* Compiler-cpp-hydro */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-left hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Compiler in C++
            </h2>
            <p className="text-gray-600 mb-4">
              A compiler made in C++ for a test language with simple syntax.
            </p>
            <a
              href="https://github.com/Nubzzin/Compiler-cpp-hydro"
              target="_blank"
              className="text-blue-600 hover:underline font-medium"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
