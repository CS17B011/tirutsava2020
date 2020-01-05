import React from "react";

import Faq from "./pages/faqs/main";
import Gallery from "./pages/gallery/gallery";
import Query from "./pages/faqs/query/query";
import Sponsers from "./pages/sponsers/sponsers";
import logo from "./logo.svg";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import EventDetails from "./components/event-details/EventDetails";
import OnlineDetails from "./components/online-details/OnlineDetails";
import CulturalDetails from "./components/cultural-details/CulturalDetails";
import TechnicalEvents from "./components/technical-events/TechnicalEvents";
import CulturalEvents from "./components/cultural-events/CulturalEvents";
import OnlineEvents from "./components/online-events/OnlineEvents";
import AboutUs from "./components/about-us/AboutUs";
import Testimonials from "./components/testimonials/Testimonials";
import Events from "./components/event2/Events";

import Workshop from "./components/workshop/Workshop";
import "aos/dist/aos.css";
AOS.init();

const slides = [
  {
    city: "Thaikkudam",

    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlvRIUAGlUr3j8XRAW0eJ47cpUEf4DmFgISTWo5uLmj_Q0CPn9"
  },
  {
    city: "Masala Coffee",

    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgtRkv7aBCLM69U6R6nZtBjVbCz40XibhDKDuAFCpp2lCKRjXh"
  },
  {
    city: "Progressive Brothers",

    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQde1e2gBhUSAompRc-w5O6B86KAEUaWHpLHeeOlp6iFqxKHido"
  },
  {
    city: "Lagori",

    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSo6vbJFtXyxG3tEhEmELivySa8Gat5-jZOHHSdAGlnjpAQeDq"
  },
  {
    city: "Axonn",

    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQUsWCuuC5QXQwhGkVYtltUXKqN8OFtq9wxKfR5nWDbbebGFms"
  }
];

const App = () => {
  return (
    <Router>
      <Route exact path="/faq" component={Faq} />
      <Route exact path="/query" component={Query} />
      <Route exact path="/sponsers" component={Sponsers} />
      <Route exact path="/gallery" component={Gallery} />
      <div>
        <Switch>
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/events/technical" component={TechnicalEvents} />
          <Route exact path="/events/cultural" component={CulturalEvents} />
          <Route exact path="/events/online" component={OnlineEvents} />
          <Route exact path="/events/technical/:id" component={EventDetails} />
          <Route exact path="/events/online/:id" component={OnlineDetails} />
          <Route
            exact
            path="/events/cultural/:id"
            component={CulturalDetails}
          />
          <Route exact path="/workshop" component={Workshop} />

          <Route
            exact
            path="/testimonials"
            render={props => <Testimonials {...props} slides={slides} />}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
