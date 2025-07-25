import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  function changeLanguage(lang: string) {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="fixed top-4 right-4 flex space-x-1 bg-gray-100 bg-opacity-70 rounded shadow-sm p-1 z-50 select-none">
      <button
        onClick={() => changeLanguage("en")}
        className={`text-sm font-semibold rounded px-2 py-1 transition-colors ${
          i18n.language === "en"
            ? "bg-blue-900 text-white"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("pt")}
        className={`text-sm font-semibold rounded px-2 py-1 transition-colors ${
          i18n.language === "pt"
            ? "bg-blue-900 text-white"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
        aria-label="Switch to Portuguese"
      >
        PT
      </button>
    </div>
  );
}
