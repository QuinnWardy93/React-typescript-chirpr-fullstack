import React, { Component } from "react";
import { HomeProps, HomeState } from "../utils/types";
import ChirpCard from "./chirpCard";

class Home extends Component<HomeProps, HomeState> {
  constructor(props) {
    super(props);

    this.state = {
      chirps: [],
    };
  }
  componentDidMount() {
    fetch("/api/chirps")
      .then((res) => res.json())
      .then((chirps) => this.setState({ chirps }))
      .catch((err) => console.log(err));
  }
  render() {
    return this.state.chirps.map((chirp) => (
      <ChirpCard chirps={chirp} />
    ));
  }
}

export default Home;