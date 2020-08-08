import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import BackDrop from "../src/Components/SlideDrawer/BackDrop";
import SlideDrawer from "../src/Components/SlideDrawer/SlideDrawer";
import SocialLinks from "./Components/SocialLinks/SocialLinks";
import Home from "./Components/Pages/Home/Home";
import Background from "../src/Components/Background/Background";
import Coding from "../src/Components/Pages/Coding/Coding";
import Music from "../src/Components/Pages/Music/Music";

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
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/development" component={Coding} exact={true} />
            <Route path="/music" component={Music} exact={true} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
