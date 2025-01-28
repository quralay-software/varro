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
          onClick={() => changeLanguage('ru')}
          className={`px-3 py-1.5 font-arial transition-colors duration-200 bg-transparent border-none shadow-none ${
            i18n.language === 'ru' ? 'text-primary' : 'text-gray-700 hover:text-primary'
          }`}
        >
          RU
        </button>
        <button
          onClick={() => changeLanguage('kk')}
          className={`px-3 py-1.5 font-arial transition-colors duration-200 bg-transparent border-none shadow-none ${
            i18n.language === 'kk' ? 'text-primary' : 'text-gray-700 hover:text-primary'
          }`}
        >
          ҚАЗ
        </button>
        <button
          onClick={() => changeLanguage('en')}
          className={`px-3 py-1.5 font-arial transition-colors duration-200 bg-transparent border-none shadow-none ${
            i18n.language === 'en' ? 'text-primary' : 'text-gray-700 hover:text-primary'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;
