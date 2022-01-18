import React from "react";
import { Article, Brand, Cta } from "./components";
import { Blog, Evolvewd, Features, Footer, Header, Possibility } from "./containers";

const App = () => {
  return (
    <div>
      <Article />
      <Brand />
      <Cta />
      <Blog />
      <Cta />
      <Evolvewd />
      <Features />
      <Footer />
      <Header />
      <Possibility />
    </div>
  );
};

export default App;
