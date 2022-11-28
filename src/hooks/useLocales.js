import { useTranslation } from 'react-i18next';
// '@mui
import { enUS, trTR } from '@mui/material/locale';

// ----------------------------------------------------------------------

const LANGS = [
  {
    label: 'Türkçe',
    value: 'tr',
    systemValue: trTR,
    icon: '/static/images/Turkey.png',
  },
  {
    label: 'English',
    value: 'en',
    systemValue: enUS,

    icon: '/static/images/United-Kingdom.png',
  },
];

export default function useLocales() {
  const { i18n, t: translate } = useTranslation();
  const langStorage = localStorage.getItem('i18nextLng');
  const currentLang = LANGS.find((_lang) => _lang.value === langStorage) || LANGS[1];

  const handleChangeLanguage = (newlang) => {
    i18n.changeLanguage(newlang);
  };

  return {
    onChangeLang: handleChangeLanguage,
    translate,
    currentLang,
    allLang: LANGS,
  };
}
