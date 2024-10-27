import React from 'react';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import About from './about/about';
import Contact from'./contact/contact';
import Portfolio from './portfolio/portfolio';  

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

