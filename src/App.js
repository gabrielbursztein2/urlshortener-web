import React from 'react';
import './App.css';
import UrlForm from './components/urlForm';
import ResultUrl from './components/resultUrl';

const App = () => {
  return (
    <div className="App">
      <UrlForm />
      <ResultUrl />
    </div>
  );
}


export default App;
