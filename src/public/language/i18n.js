import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import english from '../language/en/en.json';
import vietnamese from '../language/vn/vn.json';

i18next.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: english,
    vn: vietnamese,
  },
  react: {useSuspense: false},
});
export default i18next;
