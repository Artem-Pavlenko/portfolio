import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import MySkills from "./components/Skills/MySkills";
import MyProjects from "./components/Projects/MyProjects";
import Remote from "./components/Remote/Remote";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <MySkills/>
      <MyProjects/>
      <Remote/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
