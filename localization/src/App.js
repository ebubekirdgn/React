import './App.css';
import { useState } from 'react';
import { IntlProvider, FormattedRelative, FormattedNumber, FormattedMessage } from 'react-intl';


const message = {
  'tr-TR': {
    title: "Merhaba Dünya"
  },
  'en-US': {
    title: "Hello World"
  }
}

function App() {
  const [lang, setLang] = useState("tr-TR");
  return (
    <div className='App'>
      <IntlProvider messages={message[lang]}>
        <FormattedMessage id='title' />
        <br /> <br />
        <button onClick={() => setLang("tr-TR")}> TR</button>
        <button onClick={() => setLang("en-US")}> EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
