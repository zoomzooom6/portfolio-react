import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    {
      name: "About Me"
    },
    {
      name: "Portfolio"
    },
    {
      name: "Contact"
    },
    {
      name: "Resume"
    }
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  function setSection() {
    let activeSection = currentCategory.name;
    switch (activeSection) {
      case "Contact":
        return <Contact></Contact>
      case "Portfolio":
        return <Portfolio></Portfolio>
      case "Resume":
        return <Resume></Resume>
      default: 
      return <About></About>
    }
  }

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        {setSection()}
      </main>      
      <Footer />
    </div>
  );
}

export default App;
