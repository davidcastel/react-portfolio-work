import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import Title from "./Title";
import profile from "../assets/profile.png";

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
        <img src={profile} alt="Profile" className="profile" />
        <h1> Hello! </h1>
        <p>My name is david. </p>
        <Title />
        <p> I 'm always looking foward to working on meaningful</p>
        {this.state.displayBio ? (
          <div>
            <p> I am into web dev and programming</p>
            <p> Besides coding, I like to run</p>
            <button onClick={this.toggleDisplayBio}> Show less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}> Read more </button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

// const AppWithHeader = () => {
//   return <Header Component={App} />;
// };

export default App;
