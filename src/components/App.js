import React from 'react';
import Header from './Header';
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="page__container">
      <>
          <Header />
          <Main />
          <Footer />
      </>
        </div>
      </div>
    </div>
  );
}

export default App;