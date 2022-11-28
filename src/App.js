import "./App.css";
import React, { Component } from "react";
import logo from "./img/logo.png";
import CharactersContainer from "./components/CharactersContainer";
class App extends Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  state = {
    profile: [],
    isLoading: true,
  };

  componentDidMount() {
    fetch(`https://breakingbadapi.com/api/characters`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          isLoading: false,
          profile: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleSearchChange = (e) => {
    e.preventDefault();
    this.setState({
      profile: e.target.elements.search.value,
    });
  };

  render() {
    return (
      <>
        <div className='parentBD'>
          <div className='logoBD'>
            <img src={logo} />
          </div>
          <div className='searchMain'>
            <CharactersContainer
              handleSearchChange={this.state.handleSearchChange}
              isLoading={this.state.isLoading}
              profile={this.state.profile}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
