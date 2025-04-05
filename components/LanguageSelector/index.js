import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const LanguageSelector = () => {
  const router = useRouter();
  const { i18n } = useTranslation();

  const changeLanguage = (locale) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <div className="flex items-center">
      <div className="h-6 w-px bg-gray-300 mx-4"></div>
      <div className="flex items-center space-x-3">
        <button
          onClick={() => changeLanguage("ru")}
          className={`px-3 py-1.5 font-arial transition-colors duration-200 bg-transparent border-none shadow-none ${
            i18n.language === "ru"
              ? "text-[#E2B36A]"
              : "text-white/90 hover:text-white/75"
          }`}
        >
          RU
        </button>
        <button
          onClick={() => changeLanguage("kk")}
          className={`px-3 py-1.5 font-arial transition-colors duration-200 bg-transparent border-none shadow-none ${
            i18n.language === "kk"
              ? "text-[#E2B36A]"
              : "text-white/90 hover:text-white/75"
          }`}
        >
          ҚАЗ
        </button>
        <button
          onClick={() => changeLanguage("en")}
          className={`px-3 py-1.5 font-arial transition-colors duration-200 bg-transparent border-none shadow-none ${
            i18n.language === "en"
              ? "text-[#E2B36A]"
              : "text-white/90 hover:text-white/75"
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;
