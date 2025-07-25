import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <div className="flex justify-end p-4 space-x-2 bg-gray-100">
      <button
        onClick={() => changeLanguage("en")}
        className={`px-2 py-1 rounded ${
          i18n.language === "en" ? "bg-blue-900 text-white" : "bg-gray-200"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("pt")}
        className={`px-2 py-1 rounded ${
          i18n.language === "pt" ? "bg-blue-900 text-white" : "bg-gray-200"
        }`}
      >
        PT
      </button>
    </div>
  );
};

export default LanguageSwitcher;
