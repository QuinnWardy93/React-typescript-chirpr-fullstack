import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/nav";
import EditChirp from "./components/EditChirp"
import AddChirp from "./components/AddChirp"

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/AddChirp" component={AddChirp} /> 
                    <Route exact path="/editchirp/:id" component={EditChirp}/>
      </Switch>
    </Router>
  );
}
