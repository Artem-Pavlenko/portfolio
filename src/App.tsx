import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import MySkills from "./components/Skills/MySkills";
import Projects from "./components/Projects/Projects";
import Remote from "./components/Remote/Remote";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <MySkills/>
      <Projects/>
      <Remote/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
