import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Faq from "./pages/faqs/main";
import Gallery from "./pages/gallery/gallery";
import Query from "./pages/faqs/query/query";
import Sponsers from "./pages/sponsers/sponsers";

function App() {
  return (
    <Router>
      <Route exact path="/faq" component={Faq} />
      <Route exact path="/query" component={Query} />
      <Route exact path="/sponsers" component={Sponsers} />
      <Route exact path="/gallery" component={Gallery} />
    </Router>
  );
}

export default App;
