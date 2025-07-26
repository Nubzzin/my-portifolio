import { Link } from "react-router-dom";
import whiteImage from "../assets/white.jpg";
import { useTranslation } from "react-i18next";

function ContactPage() {
  const { t } = useTranslation();
  const email = t("contact.contacts.email", { returnObjects: true }) as {
    label: string;
    url: string;
    text: string;
  };

  const linkedin = t("contact.contacts.linkedin", { returnObjects: true }) as {
    label: string;
    url: string;
    text: string;
  };

  const github = t("contact.contacts.github", { returnObjects: true }) as {
    label: string;
    url: string;
    text: string;
  };

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
            {t("contact.contacts.title")}
          </h1>
          <p className="text-lg md:text-xl text-white">
            {t("contact.contacts.subtitle")}
          </p>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-md p-8 text-center mb-10">
        <h2 className="text-2xl font-semibold mb-6">
          {t("contact.contacts.quick")}
        </h2>
        <p className="mb-4 text-gray-700">
          {email.label}{" "}
          <a href={email.url} className="text-blue-600 hover:underline">
            {email.text}
          </a>
        </p>
        <p className="mb-4 text-gray-700">
          {linkedin.label}{" "}
          <a
            href={linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {linkedin.text}
          </a>
        </p>
        <p className="mb-4 text-gray-700">
          {github.label}{" "}
          <a
            href={github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {github.text}
          </a>
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-center space-x-4">
        <Link
          to="/projects"
          className="px-6 py-3 bg-pink-600 text-white rounded-2xl shadow hover:bg-pink-900 transition"
        >
          {t("home.projects_button")}
        </Link>
        <Link
          to="/"
          className="px-6 py-3 border border-gray-400 rounded-2xl text-gray-700 hover:bg-gray-200 transition"
        >
          {t("projects.home_button")}
        </Link>
      </div>
    </main>
  );
}

export default ContactPage;
