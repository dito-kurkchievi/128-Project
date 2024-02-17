import { useTranslation } from 'react-i18next';
import './styles/_global.css';

const App = () => {
  const { t, i18n } = useTranslation();


  const toggle = () => {
    let currentLang = i18n.language;
    i18n.changeLanguage(currentLang === 'en' ? 'ka' : 'en');
  }

  return (
    <div>
        {t('Hello')}
        <button onClick={toggle}>{t('Toggle Lang')}</button>
    </div>
  );
}

export default App;