import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Header from './components/header';
import InfoBar from './components/infoBar';
import Footer from './components/footer';

function App() {

  return (
    <>
      <Header />
      <InfoBar title='Para você que é MEI ou quer se tornar MEI, calcule o valor da sua hora de trabalho:' />
      <InfoBar title='Calcule o valor a ser cobrado para um projeto:' />
      <Footer />
    </>

  );
}

export default App;
