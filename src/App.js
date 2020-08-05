import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import BackDrop from "../src/Components/SlideDrawer/BackDrop";
import SlideDrawer from "../src/Components/SlideDrawer/SlideDrawer";
import SocialLinks from "./Components/SocialLinks/SocialLinks";
import Home from "./Components/Pages/Home/Home";
import Background from "../src/Components/Background/Background";

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
        <NavBar drawClickHandler={this.drawClickHandler} />
        <div className="linkPosition">
          <SocialLinks />
          <Background />
        </div>
        <SlideDrawer show={this.state.SlideDrawerOpen} />
        {backDrop}
        <Router>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
