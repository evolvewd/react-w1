import React from "react";
import { Article, Brand, Cta, Feature, Navbar } from "./components";
import { Blog, Evolvewd, Features, Footer, Header, Possibility } from "./containers";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Evolvewd />
      {/* <Feature />
      <Article />
      <Cta />
      <Blog />
      <Cta />
      <Features />
      <Footer /> 

      <Possibility />*/}
    </div>
  );
};

export default App;
