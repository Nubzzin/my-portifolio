import { Link } from "react-router-dom";
import backgroundImage from "../assets/image.jpeg";

function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      {/* Image block with text overlay */}
      <div className="relative w-[90vw] max-w-4xl h-96 rounded-xl overflow-hidden shadow-lg mb-8">
        {/* Background image cropped to the left */}
        <div className="absolute inset-0 bg-black">
          <img
            src={backgroundImage}
            alt="Background"
            className="w-full h-full object-cover object-left brightness-75"
          />
        </div>

        {/* Foreground text */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Hi, I'm Matheus
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            A passionate developer focused on building web apps and OS-focused
            software.
          </p>
        </div>
      </div>

      {/* Buttons below the image */}
      <div className="flex justify-center space-x-4">
        <Link
          to="/projects"
          className="px-6 py-3 bg-blue-900 text-white rounded-2xl shadow hover:bg-blue-600 transition"
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 border border-gray-700 text-gray-800 rounded-2xl hover:bg-gray-200 transition"
        >
          Contact Me
        </Link>
      </div>
    </main>
  );
}

export default HomePage;
