import React, { Component } from "react";

const Joke = ({ joke: { setup, punchline } }) => (
  <p style={{ margin: 20 }}>
    {setup} <em> {punchline} </em>
  </p>
);

class Jokes extends Component {
  state = { joke: {}, jokes: [] }; // key of joke. An empty object itself

  // Best practice to place the 'FETCH' and other asycronized code
  // in componentDidMount
  // Fetching an API
  componentDidMount() {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(response => response.json())
      .then(json => this.setState({ joke: json }))
      .catch(error => alert(error.message));
  }

  fetchJokes = () => {
    fetch("https://official-joke-api.appspot.com/random_ten")
      .then(response => response.json())
      .then(json => this.setState({ jokes: json }))
      .catch(error => alert(error.message));
  };

  render() {
    return (
      <div>
        <h2> Highlighted Joke </h2>
        {/* Pass down joke through props */}
        <Joke joke={this.state.joke} />
        <hr />
        <h3> Want ten new jokes> </h3>
        <button onClick={this.fetchJokes}> Click me! </button>
        {this.state.jokes.map(joke => (
          <Joke key={joke.id} joke={joke} />
        ))}
      </div>
    );
  }
}

export default Jokes;
