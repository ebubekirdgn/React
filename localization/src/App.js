import './App.css';
import { useState, useEffect } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';


const message = {
  'tr-TR': {
    title: "Merhaba Dünya"
  },
  'en-US': {
    title: "Hello World"
  }
}

function App() {
  const isLocale=localStorage.getItem('locale');

  const defaultLocale = isLocale ? isLocale: navigator.language;
 
  console.log(defaultLocale);
  const [locale, setLocale] = useState(defaultLocale);

useEffect (()=> {
    localStorage.setItem('locale',locale)
},[locale]);

  return (
    <div className='App'>
      <IntlProvider locale={locale} messages={message[locale]}>
        <FormattedMessage id='title' />
        <br /> <br />
        <button onClick={() => setLocale("tr-TR")}> TR</button>
        <button onClick={() => setLocale("en-US")}> EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
