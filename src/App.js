import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import BackDrop from "../src/Components/SlideDrawer/BackDrop";
import SlideDrawer from "../src/Components/SlideDrawer/SlideDrawer";
import SocialLinks from "./Components/SocialLinks/SocialLinks";
import Home from "./Components/Pages/Home/Home";
import Background from "../src/Components/Background/Background";
import Coding from "../src/Components/Pages/Coding/Coding";
import Music from "../src/Components/Pages/Music/Music";
import Contact from "../src/Components/Pages/Contact/Contact";
import About from "../src/Components/Pages/About/About";
import Photography from "./Components/Pages/Photography/Photography";
import Art from "./Components/Pages/Art/Art";
import threeD from "./Components/Pages/3D/3D";
class App extends Component {
  state = {
    SlideDrawerOpen: false,
  };

  drawClickHandler = () => {
    this.setState((prevState) => {
      return { SlideDrawerOpen: !prevState.SlideDrawerOpen };
    });
  };

  backDropClickHandler = () => {
    this.setState({ SlideDrawerOpen: false });
  };

  render() {
    let backDrop;

    if (this.state.SlideDrawerOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler} />;
    }
    return (
      <div className="App">
        <div className="linkPosition"></div>
        {backDrop}
        <Router>
          <SocialLinks />
          <NavBar drawClickHandler={this.drawClickHandler} />
          <Background />
          <SlideDrawer show={this.state.SlideDrawerOpen} />
          <AnimatePresence exitBeforeEnter>
            <Switch>
              <Route path="/" component={Home} exact={true} />
              <Route path="/development" component={Coding} exact={true} />
              <Route path="/music" component={Music} exact={true} />
              <Route path="/contact" component={Contact} exact={true} />
              <Route path="/about" component={About} exact={true} />
              <Route path="/photography" component={Photography} exact={true} />
              <Route path="/art" component={Art} exact={true} />
              <Route path="/3D" component={threeD} exact={true} />
            </Switch>
          </AnimatePresence>
        </Router>
      </div>
    );
  }
}

export default App;
