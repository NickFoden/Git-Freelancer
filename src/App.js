import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gitLog: "",
      gitRepo: ""
    };
  }
  handleSubmit() {
    // fetch(`${this.state.gitRepo}`)
    fetch("https://api.github.com/repos/NickFoden/Git-Freelancer/commits")
      .then(function(response) {
        console.log(response);
        return response.json();
        // const res = response.json();
        // console.log(res);
        // this.setState({
        //   gitLog: res
        // });
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
      });
  }

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={() => this.handleSubmit()}>
          <input
            type="text"
            name="gitRepo"
            onChange={this.handleChange}
            placeholder="https://github.com/OctoCat/cardboardBoxRepo"
          />
          <br />
          <button type="button" onClick={this.handleSubmit}>
            Get the Logs
          </button>
        </form>
        <p> {this.state.gitLog}</p>
      </div>
    );
  }
}

export default App;
