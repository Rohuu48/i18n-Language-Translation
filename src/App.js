import React from 'react';
import { useTranslation } from 'react-i18next';

const App=()=> {
  const { t, i18n } = useTranslation();
  const changeLanguage=(lang)=>{
    i18n.changeLanguage(lang)
  }
  return (
    <div>
        <button onClick={()=>changeLanguage('en')}>english</button>
        <button onClick={()=>changeLanguage('be')}>bengali</button>
        <button onClick={()=>changeLanguage('hi')}>hindi</button>
        <h1>{t('Welcome')}</h1>
    </div>
  )
}

export default App;