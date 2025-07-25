import { Link } from "react-router-dom";
import whiteImage from "../assets/white.jpg";

function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      {/* Image Header */}
      <div className="relative w-full max-w-4xl h-96 mb-10 rounded-2xl overflow-hidden flex items-center justify-center">
        <img
          src={whiteImage}
          alt="Contact Background"
          className="absolute inset-0 w-full h-full object-cover object-left brightness-75"
        />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Contact Me
          </h1>
          <p className="text-lg md:text-xl text-white">
            I'm currently looking for new opportunities. If you'd like to get in
            touch, please reach out!
          </p>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-md p-8 text-center mb-10">
        <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
        <p className="mb-4 text-gray-700">
          📧 Email:{" "}
          <a
            href="mailto:matheuscds.contato@gmail.com"
            className="text-blue-600 hover:underline"
          >
            matheuscds.contato@gmail.com
          </a>
        </p>
        <p className="mb-4 text-gray-700">
          💼 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/matheus-correia-de-sousa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            linkedin.com/in/matheus-correia-de-sousa
          </a>
        </p>
        <p className="mb-4 text-gray-700">
          🐙 GitHub:{" "}
          <a
            href="https://github.com/Nubzzin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            github.com/Nubzzin
          </a>
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-center space-x-4">
        <Link
          to="/projects"
          className="px-6 py-3 bg-pink-600 text-white rounded-2xl shadow hover:bg-pink-900 transition"
        >
          View Projects
        </Link>
        <Link
          to="/"
          className="px-6 py-3 border border-gray-400 rounded-2xl text-gray-700 hover:bg-gray-200 transition"
        >
          Home
        </Link>
      </div>
    </main>
  );
}

export default ContactPage;
